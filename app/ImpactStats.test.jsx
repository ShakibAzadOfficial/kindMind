import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ImpactStats from './ImpactStats';

const stats = [
  {
    value: 8,
    suffix: '+',
    label: 'Years of clinical experience',
    detail: 'Supporting clients across the lifespan',
  },
];

let intersectionCallback;
let animationFrames;
let disconnect;
let observedElement;
let observerOptions;

beforeEach(() => {
  animationFrames = [];
  disconnect = vi.fn();
  observedElement = null;
  observerOptions = null;

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback, options) {
        intersectionCallback = callback;
        observerOptions = options;
      }

      observe(element) {
        observedElement = element;
      }

      unobserve() {}

      disconnect() {
        disconnect();
      }
    },
  );
  vi.stubGlobal(
    'requestAnimationFrame',
    vi.fn((callback) => {
      animationFrames.push(callback);
      return animationFrames.length;
    }),
  );
  vi.stubGlobal('cancelAnimationFrame', vi.fn());
  vi.spyOn(performance, 'now').mockReturnValue(0);
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  );
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('ImpactStats', () => {
  it('counts to the final values once the section enters view', () => {
    const { unmount } = render(<ImpactStats stats={stats} />);

    expect(observedElement).toHaveClass('impactMetric');
    expect(observerOptions).toEqual({ rootMargin: '0px 0px -10% 0px', threshold: 0.5 });
    expect(screen.getByLabelText('8+ Years of clinical experience')).toHaveTextContent('0+');

    act(() => intersectionCallback([{ isIntersecting: false }]));
    expect(requestAnimationFrame).not.toHaveBeenCalled();

    act(() => intersectionCallback([{ isIntersecting: true }]));
    expect(disconnect).toHaveBeenCalledOnce();

    act(() => animationFrames[0](500));
    expect(screen.getByLabelText('8+ Years of clinical experience')).toHaveTextContent('7+');

    act(() => animationFrames[1](1000));
    expect(screen.getByLabelText('8+ Years of clinical experience')).toHaveTextContent('8+');

    unmount();
    expect(cancelAnimationFrame).toHaveBeenCalled();
  });

  it('shows final values immediately when reduced motion is preferred', () => {
    matchMedia.mockReturnValue({ matches: true });
    render(<ImpactStats stats={stats} />);

    act(() => intersectionCallback([{ isIntersecting: true }]));

    expect(screen.getByLabelText('8+ Years of clinical experience')).toHaveTextContent('8+');
    expect(requestAnimationFrame).not.toHaveBeenCalled();
  });
});
