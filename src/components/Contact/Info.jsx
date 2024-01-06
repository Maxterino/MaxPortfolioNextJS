import React from 'react';

function Info() {
  return (
    <section className="info-contact section-padding sub-bg pt-0 bord-thin-bottom">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <span className="sub-title mb-15 opacity-8">- Contact Info</span>
  
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50 md-mb50">
              <span className="sub-title opacity-8 mb-5">Email :</span>
              <h6><a href="mailto:maxvmaasakker@gmail.com">maxvmaasakker@gmail.com</a></h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center sm-mb50">
              <span className="sub-title opacity-8 mb-5">Location :</span>
              <h6>Apeldoorn <br /> The Netherlands</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <span className="sub-title opacity-8 mb-5">Phone :</span>
              <h6>+31 6 22144157</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info