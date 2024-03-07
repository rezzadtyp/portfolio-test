import { useLayoutEffect, useRef, useEffect } from "react";
import { useInView, useAnimation } from "framer-motion";
import gsap from "gsap";
import Hero from "./components/Hero";
import Header from "./components/header/Header";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  const comp = useRef(null);
  const isInView = useInView(comp, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#intro", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-full p-10 bg-gray-50 absolute top-0 left-0 font-hankenGrotesk w-screen flex flex-col gap-10 tracking-tight z-50"
      >
        <h1 className="text-9xl" id="title-1">
          Web Developer
        </h1>
        <h1 className="text-9xl" id="title-2">
          Designer
        </h1>
        <h1 className="text-9xl" id="title-3">
          Freelancer
        </h1>
      </div>
      {/* CONTENT START FROM HERE */}
      <div className="bg-zinc-950 font-hankenGrotesk z-0">
        <Header />
        <Hero />
        <div>
          <About />
        </div>
        <div>
          <Works />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
