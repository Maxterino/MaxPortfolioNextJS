"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from '@/common/initIsotope';
//= Static Data src>data>preview>portfolio.json voor frontpage aanpassen
import data from '@/data/Preview/gallery.json';

function Gallery() {
  useEffect(() => {
    initIsotope();
  }, []);

  return (
    <div className="demos section-padding pb-40 bord-thin-bottom mt-50">
      <div className="container-xxl">
        <div className="gallery">
          <div className="row lg-marg">
            {data.map(item => (
              <div className="items col-lg-4 col-md-6" key={item.id}>
                <div className="item">
                  <div className="img">
                    <img src={item.image} alt="" />
                    <Link href={item.link} className="link-overlay"></Link>
                  </div>
                  <div className="info">
                    <h6>
                      <Link href={item.link}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery