'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Re-initializes ScrollSmoother on every client-side navigation.
// On first load, smoother-script.js handles the initial setup.
// On navigation, the old smoother's DOM references are stale (React replaced the
// #smooth-wrapper / #smooth-content elements), so we kill it and create a fresh one.
export default function ScrollSmootherInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip first load — smoother-script.js (lazyOnload) handles it.
    if (typeof ScrollSmoother === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const existing = ScrollSmoother.get();
    if (existing) existing.kill();

    ScrollSmoother.create({ smooth: 2, effects: true });
  }, [pathname]);

  return null;
}
