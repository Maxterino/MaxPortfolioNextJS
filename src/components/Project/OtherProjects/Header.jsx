"use client";
import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-project1">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">Other projects</h1>
              <p>Here you can view other smaller projects that I created during my career as a graphic designer.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img mt-100" data-background="/assets/imgs/works/projects/other/5.png"></div>
    </header>
  )
}

export default Header