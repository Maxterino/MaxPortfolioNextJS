"use client";
import React, { useEffect } from 'react';

// Module-level flag: true after the first load animation has played.
// Persists across client-side navigations (module is only evaluated once per session).
let firstLoadDone = false;

function LoadingScreen() {

  useEffect(() => {
    const loader = document.querySelector('.loader-wrap');
    if (!loader) return;

    // On subsequent client-side navigations, hide the loader immediately.
    if (firstLoadDone) {
      loader.style.display = 'none';
      return;
    }

    // Fallback: force-hide the loader after 8 s in case the GSAP animation
    // fails or gets interrupted (e.g. by ScrollSmoother initialization).
    const fallback = setTimeout(() => {
      loader.style.cssText = 'display:none!important';
    }, 8000);

    const interval = setInterval(() => {
      if (typeof gsap !== 'undefined') {
        clearInterval(interval);
        firstLoadDone = true;

        const svg = document.getElementById("svg");
        const tl = gsap.timeline({
          onComplete: () => {
            // Guarantee the loader is hidden even if a tween is skipped.
            loader.style.cssText = 'display:none!important';
            clearTimeout(fallback);
          }
        });
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", { delay: 1.5, y: -100, opacity: 0, });
        tl.to(svg, { duration: 0.5, attr: { d: curve }, ease: "power2.easeIn", }).to(svg, { duration: 0.5, attr: { d: flat }, ease: "power2.easeOut", });
        tl.to(".loader-wrap", { y: -1500, });
        tl.to(".loader-wrap", { zIndex: -1, display: "none", });
        tl.from("header", { y: 200 }, "-=1.5");
        tl.from("header .container", { y: 40, opacity: 0, delay: 0.3 }, "-=1.5");
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
