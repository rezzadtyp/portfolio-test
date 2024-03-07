import React from "react";
import TechStack from "./TechStack";

const About = () => {
  return (
    <>
      <div className="grid h-screen">
        <div className="flex place-items-center justify-evenly">
          <div className="relative">
            <img
              className="w-500 h-500 object-cover"
              src="/monkey-developer.gif"
              alt="profile"
            />
          </div>
          <div className="grid gap-4 relative justify-center">
            <h1 className="relative text-4xl font-bold text-gray-100 font-hankenGrotesk">
              Hola! I&apos;m Rezza.
            </h1>
            <p className="relative text-small font-medium text-gray-100 font-hankenGrotesk max-w-xl">
              Enthusiastic full-stack web designer and creator devoted to making
              consistent computerized encounters. Mixing imagination with
              specialized skill, I bring thoughts to life through exquisite plan
              and strong usefulness. Let's construct something astonishing
              together!
            </p>
          </div>
        </div>
            <TechStack />
      </div>
    </>
  );
};

export default About;
