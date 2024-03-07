import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto w-1000">
        <Link
          heading="ERASED&nbsp;PROJECT"
          subheading="UI DESIGN"
          imgSrc="/erased1.jpg"
          href="#"
        />
        <Link
          heading="OSAKA&nbsp;NFT"
          subheading="UI DESIGN"
          imgSrc="/osaka.jpg"
          href="#"
        />
        <Link
          heading="WELAUNCH"
          subheading="WEB3 UI DESIGN"
          imgSrc="welaunch.png"
          href="#"
        />
        <Link
          heading="NOWAI&nbsp;AI"
          subheading="UI DESIGN & DEVELOPMENT"
          imgSrc="nowaip.png"
          href="#"
        />
        <Link
          heading="COMING&nbsp;SOON"
          subheading="Maybe your project will take place here 😉"
          imgSrc="eak.jpeg"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-zinc-900 py-4 transition-colors duration-500 hover:border-gray-100 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          // transition={{
          //   type: "spring",
          //   staggerChildren: 0.075,
          //   delayChildren: 0.25,
          // }}
          className="relative z-10 block text-4xl font-bold text-zinc-900 transition-colors duration-500 group-hover:text-gray-100 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              // transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-zinc-900 transition-colors duration-500 group-hover:text-gray-100">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0 },
          whileHover: { scale: 1.3 },
        }}
        // transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-10 h-48 w-64 object-cover"
        alt={`Image of ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
            rotate: "-45deg",
          },
        }}
        className="relative z-0 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
