import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { contents } from "../utils/data";

const MainContents = () => {
  const itemsRef = useRef([]);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      tl.to(entry.target.querySelector("img"), {
        y: "0",
        x: "0",
        opacity: "1",
        duration: 1,
      });
      tl.to(entry.target.querySelector("#textContainer"), {
        y: "0",
        x: "0",
        opacity: "1",
        duration: 1,
      });
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    Array.from(itemsRef.current).map((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      Array.from(itemsRef.current).map((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [itemsRef.current, options]);

  return (
    <main className="max-w-5xl w-11/12  my-12 mx-auto">
      <ul>
        {contents.map((item, i) => {
          if (item.odd) {
            return (
              <li
                ref={(el) => (itemsRef.current[i] = el)}
                key={item.id}
                id={item.id}
                className=" grid  md:grid-cols-3 md:grid-rows-1 md:mt-40 mb-16 "
              >
                <div
                  id="textContainer"
                  className="flex flex-col items-start w-11/12 md:w-full md:mt-8 opacity-0 transform -translate-x-10"
                >
                  <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap  tracking-wider font-Script text-black mb-4">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:max-w-11/12 md:max-w-xs tracking-tight  font-serif	">
                    {item.text}
                  </p>
                </div>
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-11/12 mb-16 row-start-1 row-end-1 md:col-start-2 md:col-end-4 md:ml-auto block rounded-sm opacity-0 transform translate-y-5 translate-x-5"
                />
              </li>
            );
          } else {
            return (
              <li
                ref={(el) => (itemsRef.current[i] = el)}
                key={item.id}
                id={item.id}
                className="grid justify-items-end md:justify-items-start md:grid-cols-3 md:mt-40 mb-16"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-11/12  md:col-start-1 md:col-end-3 block rounded-sm mb-16 opacity-0 transform -translate-x-5 translate-y-5"
                />
                <div
                  id="textContainer"
                  className="flex flex-col items-end md:items-start w-11/12 md:w-full md:mt-8 opacity-0 transform translate-x-10"
                >
                  <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap  tracking-wider font-Script text-black mb-4">
                    {item.title}
                  </h2>
                  <p
                    id="paragraph"
                    className="text-sm sm:max-w-11/12 md:max-w-xs tracking-tight  font-serif "
                  >
                    {item.text}
                  </p>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </main>
  );
};

export default MainContents;
