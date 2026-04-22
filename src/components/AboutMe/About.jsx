"use client";
import React from 'react';
//= Static Data
import data from '@/data/AboutMe/about.json';

function About() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="intro section-padding pb-0">
      <div className="container">
        <div className="row pb-100 bord-thin-bottom mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <img src="/assets/imgs/portfolio-imgs/MaxPictureGrayscale.png" alt=""/>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div>
              <h3 className="text-u text-indent">I design with both sides of the brain. The creative eye of a graphic designer and the logical thinking of someone who codes their own projects.</h3>
              <div className="text mt-30">
                <p>After graduating in graphic design and interning in Tokyo, I made a deliberate shift into UX Design at Windesheim University of Applied Sciences. I wanted to go deeper than visuals, understanding why people interact with products the way they do and designing experiences that actually work for them.</p>
                <div className="text mt-30">
                  <p>I can sketch a concept, prototype it in Figma, and build it in code. That combination is what sets me apart: knowing what's technically possible makes me a better designer, and knowing design makes me a better builder. I'd rather test an idea than guess.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title fz-20 md-mb50">My <br /> Specialties.</h6>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="cont">
              <div className="accordion bord">
                {data.map((item, index) => (
                  <div key={item.id} className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay={`${((index * 0.2) + 0.1).toFixed(1)}s`}>
                    <div className="title">
                      <h4>{item.title}</h4>
                      <span className="ico"></span>
                    </div>
                    <div className="accordion-info">
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About