'use client';
import React, { useEffect, useState } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Static Data
import data from '@/data/Portfolio/photography.json';

function CarouselSlider() {
  const [galleryImg, setGalleryImg] = useState(null);
  const [galleryText, setGalleryText] = useState(null);

  const swiperGalleryImageOptions = {
    modules: [Navigation, Autoplay, Keyboard, Mousewheel, Pagination],
    onSwiper: function (swiper) {
      setGalleryImg(swiper);
    },
    spaceBetween: 80,
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    loopedSlides: 4,
    mousewheel: true,
    speed: 1500,
    navigation: {
      nextEl: '.carousel-slider .swiper-controls .swiper-button-next',
      prevEl: '.carousel-slider .swiper-controls .swiper-button-prev',
    },
    pagination: {
      el: '.carousel-slider .swiper-pagination',
      clickable: true,
      renderBullet: function (_, className) {
        return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
          '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
          'stroke-opacity="1" stroke-width="1px"></circle>' +
          '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
          '</svg></span>';
      },
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    }
  }

  const swiperGalleryTextOptions = {
    modules: [Mousewheel],
    onSwiper: function (swiper) {
      setGalleryText(swiper);
    },
    spaceBetween: 30,
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    loopedSlides: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    mousewheel: true,
    speed: 1500,
  }

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    if (galleryImg && galleryText) {
      galleryImg.on("slideChangeTransitionStart", function () {
        galleryText.slideTo(galleryImg.activeIndex);
      });
      galleryText.on("transitionStart", function () {
        galleryImg.slideTo(galleryText.activeIndex);
      });
    }
  }, [galleryImg, galleryText]);

  return (
    <header className="carousel-slider valign">
      <div className="full-width">
      <iframe title="Widget Iframe" style={{ width: '100%', height: '695px', overflow: 'auto' }} src="https://widgetviewer.photoconnector.net?widgetId=35476a9f-56bf-450a-947b-24724a61e795&securityId=0e46b161-1045-4e2b-b3bd-ebec4e5ccdc2&locale=nl-NL" frameBorder="0" allowfullscreen></iframe>
      </div>
    </header>
  )
}

export default CarouselSlider;