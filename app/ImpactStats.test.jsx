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

beforeEach(() => {
  animationFrames = [];
  disconnect = vi.fn();

  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback) {
        intersectionCallback = callback;
      }

      observe() {}

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
