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
              <h3 className="text-u text-indent">If you said to me that I will be studying to become a graphic designer 4 years ago, I would call you crazy.</h3>
              <div className="text mt-30">
                <p>I shifted from studying IT management to graphic design after realizing my passion during an IT internship. While working on a group project involving internet routers, I designed a logo for our team, Progress IT. Discovering that designing the logo was the most enjoyable part, I decided to pursue graphic design.</p>
                <div className="text mt-30">
                  <p>Despite not having a previous inclination towards design and art, my studies in graphic design have heightened my appreciation for it. Now, I am more critical of designs, evaluating everything from soda cans to restaurant websites. My goal is to create designs that evoke the same satisfaction I feel when encountering captivating designs.</p>
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