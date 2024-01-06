import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import Navbar from "@/components/Common/Navbar";
import Menu from "@/components/Common/Menu";
import Header from "@/components/AboutMe/Header";
import Marquee from "@/components/AboutMe/Marquee";
import About from "@/components/AboutMe/About";
import Services from "@/components/AboutMe/Services";
import Works from "@/components/AboutMe/Works";
import Testimonials from "@/components/AboutMe/Testimonials";
import Blog from "@/components/AboutMe/Blog";
import WhiteSpace from "@/components/AboutMe/WhiteSpace";
import Contact from "@/components/AboutMe/Contact";
import Footer from "@/components/Common/Footer2";

export const metadata = {
  title: 'About Me - Max van Maasakker',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      '/assets/fonts/mona-sans/style.css',
      '/assets/css/plugins.css',
      '/assets/css/style.css'
    ])
  }
}

export default function CreativePortfolio() {
  return (
    <body className="crev-portfolio">
      <LoadingScreen />
      <Cursor />
      <div className="noise"></div>
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar borderBottom />
        <Menu />
        <div id="smooth-content">
          <main className="main-bg">
            <div className="main-box main-bg ontop">
              <Header />
              <Marquee />
              <About />
              <Services />
              <Works />
            </div>
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
