"use client";
import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <img src="/assets/imgs/portfolio-imgs/logo_maxportfolio2light.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="column">
                <h6 className="sub-title mb-30">Follow me</h6>
                <ul className="rest">
                  <li className="hover-this cursor-pointer">
                  <a href="https://www.linkedin.com/in/max-van-maasakker/" className="hover-this"><span className="hover-anim">LinkedIn</span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">Location : </h6>
                <p>Apeldoorn, The Netherlands</p>
                <h5 className="mt-15 underline">
                  <a href="tel:+31622144157">+31 6 22144157</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container bord pt-30 pb-30 bord-thin-top">
          <div className="row">
            <div className="col-lg-6">
              <div className="links">
                <ul className="rest">
                  <li>
                    <a href="/" className="animsition-link">Home</a>
                  </li>
                  <li>
                    <a href="/about-me" className="animsition-link">About</a>
                  </li>
                  <li>
                    <a href="/portfolio" className="animsition-link">Portfolio</a>
                  </li>
                  <li>
                    <a href="/contact" className="animsition-link">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">© 2024 | Made with ❤️ by Max van Maasakker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer