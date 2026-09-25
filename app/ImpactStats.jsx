'use client';

import { useEffect, useRef, useState } from 'react';

const animationDuration = 1000;

export default function ImpactStats({ stats }) {
  const sectionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEnteredView(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return undefined;
    }

    const startedAt = performance.now();
    let frameId;

    function updateCount(timestamp) {
      const linearProgress = Math.min((timestamp - startedAt) / animationDuration, 1);
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
      setProgress(easedProgress);

      if (linearProgress < 1) frameId = requestAnimationFrame(updateCount);
    }

    frameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(frameId);
  }, [hasEnteredView]);

  return (
    <section className="impactStrip" aria-labelledby="impact-heading" ref={sectionRef}>
      <div className="impactHeading">
        <p className="eyebrow">Experience at a glance</p>
        <h2 id="impact-heading">Care grounded in experience and responsiveness</h2>
      </div>
      <div className="impactGrid">
        {stats.map((stat) => (
          <article className="impactMetric" key={stat.label}>
            <strong
              className="impactValue"
              aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
            >
              {Math.round(stat.value * progress)}
              {stat.suffix}
            </strong>
            <h3>{stat.label}</h3>
            <p>{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
