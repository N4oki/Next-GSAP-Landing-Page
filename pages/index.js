import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import MainContents from "../components/MainContents";

export default function Home() {
  const textRef = useRef();
  const bigText = useRef();
  const sliderRef = useRef();
  const introRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    const textRefs = textRef.current.querySelectorAll("span");
    tl.to(textRefs, { y: "0%", duration: 1, stagger: 0.3 });
    tl.to(sliderRef.current, { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(introRef.current, { y: "-100%", duration: 1, stagger: 0.3 }, "-=.5");
    tl.fromTo(navRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(bigText.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div className="flex flex-col bg-hero-image z-0 w-screen h-screen  bg-cover bg-center  max-w-7xl  mx-auto">
          <nav className=" p-3 flex justify-between sm:px-8" ref={navRef}>
            <Navbar />
          </nav>

          <div
            className="relative m-auto text-white font-Script  min-w-max text-3xl sm:text-5xl md:text-7xl"
            ref={bigText}
          >
            <HeroText />
          </div>

          <div className=" max-w-7xl  w-11/12 my-12 mx-auto ">
            <div className=" grid fixed top-0 left-0 w-full h-full">
              <div
                id="intro"
                ref={introRef}
                className="bg-background grid h-full w-full place-items-center text-3xl md:text-4xl font-bold font-Script text-center"
              >
                <div ref={textRef}>
                  <h1 className="bg-background overflow-hidden">
                    <span className="transform translate-y-full inline-block">
                      Explore the Tasmania
                    </span>
                  </h1>
                  <h1 className="bg-background overflow-hidden">
                    <span className="transform translate-y-full inline-block">
                      Some text here
                    </span>
                  </h1>
                  <h1 className="bg-background overflow-hidden">
                    <span className="transform translate-y-full inline-block">
                      And some more.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="bg-slider fixed top-0 left-0 w-full h-full transform translate-y-full"
          ></div>
        </div>

        <MainContents />
      </div>
    </>
  );
}
