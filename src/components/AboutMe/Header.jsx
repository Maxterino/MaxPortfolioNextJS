import React from 'react';

function Header() {
  return (
    <header className="crev-header2">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mb-50">
            <div className="text d-flex f-bold">
              <span>Passion</span>
              <div className="img">
                <img src="/assets/imgs/b2.jpg" alt="" />
              </div>
              <div className="">
              <span>For</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text f-ultra-light">
              <span>Visual</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="img-long">
              <div className="iner-img">
                <img src="/assets/imgs/c2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <p>Innovative storytelling through visually appealing designs. Proficient at creating versatile and memorable visuals for both print and digital platforms. Collaborative and detail-oriented, committed to delivering captivating solutions that leave a lasting impression.</p>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <div className="text text-lg text-center mt-50 f-bold">
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header