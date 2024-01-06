"use client";
import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.contact-container', { yPercent: -50 })
      const cover = gsap.timeline({ paused: true })
      cover.to('.contact-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: '.main-box',
        start: 'bottom bottom',
        end: '+=50%',
        animation: cover,
        scrub: true,
      });
    }
  }

  return (
    <section className="call-action section-padding bord-thin-bottom">
      <div className="contact-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="mb-30">
                  <span className="sub-title bord">Hi,</span>
                </div>
                <h2 className="fz-70 f-bold text-u">I would love <span className="d-block f-ultra-light">to hear more</span> from you.
                </h2>
                <a href="/contact" className="butn-circle animsition-link colorbg mt-30">
                  <span>Get In Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact