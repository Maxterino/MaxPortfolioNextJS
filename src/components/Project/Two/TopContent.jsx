"use client";
import React from 'react';

function TopContent() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion .item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion-info').style.display = 'none';
    });
    event.currentTarget.classList.add('active');
    event.currentTarget.querySelector('.accordion-info').style.display = 'block';
  }

  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="mb-50">The <br /> Research</h2>
          </div>
          <div className="col-lg-7">
            <div className="text">
              <h5 className="mb-30 fw-400 line-height-40">I started researching to come up what fits this shoe brand. The shoes are made fair-trade in Africa, the target audience doesn't want to look too alternative in these shoes and the company want to show in their design that they help workers in Africa who make their shoes.</h5>
              <p className="fz-18">With this information, I could start creating my design. I started with the name. The shoes are sustainable to the environment. With that in mind, I came up with the idea to use the word 'Sustainable' in Swahili, the most spoken language in Africa. With that, I came up with the name 'Kudumu'. The font I chose was a typical African-safari font. This font was used for all the headers in the design and for the 'K' in the logo.</p><br />
              <p className="fz-18">After that, I started working on the logo. I had multiple sketches and chose a logo with the K and a hand that hugs the logo. The hugging hand stands for the company caring about their workers. However, my teachers weren't pleased with that. The hand was a bit "too much". They said that the 'K' could already be enough. With that in mind, I redesigned my logo. The shoes are sustainable and made from used tires. So, I made on the outside of the logo a tire. I designed this tire, so it also looks like a sort of button where your shoelaces go into, or the lines of the stitching on the shoe. I was satisfied with this logo, and so were my teachers. </p>
            </div>
            <div className="accordion bord mt-100">

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".1s">
                <div className="title">
                  <h4 className="fw-300">The Shoebox</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>The patterns I designed was placed on the shoebox, information about the shoe size is on top in the logo and what collection this is with the slogan is on the sides. Of course the same brown and yellow was used.</p>
                </div>
              </div>

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".3s">
                <div className="title">
                  <h4 className="fw-300">The Poster</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>For an advert for a magazine, I choose to put the shoes on front so that people could see what they would buy. Simple information as the logo, site and slogan was also added. As background, I used the pattern that use for this design.</p>
                </div>
              </div>

              <div className="item mb-20 wow fadeInUp" onClick={openAccordion} data-wow-delay=".5s">
                <div className="title">
                  <h4 className="fw-300">The Business Cards</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>This card will be shipped with an order to thank you for your purchase. I added socials and text in the colors from the color pallet. The same logo and pattern was used.</p>
                </div>
              </div>

              <div className="item wow fadeInUp" onClick={openAccordion} data-wow-delay=".7s">
                <div className="title">
                  <h4 className="fw-300">The Website</h4>
                  <span className="ico"></span>
                </div>
                <div className="accordion-info">
                  <p>Back when working on this project, I lacked the skills in HTML and CSS to code a good working/looking website myself, so I created a website in Webflow.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopContent