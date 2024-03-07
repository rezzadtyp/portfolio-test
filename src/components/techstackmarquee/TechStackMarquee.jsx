import Marquee from "react-fast-marquee";
import html from "/html5.svg";
import css3 from "/css3.svg";
import jslogo from "/jslogo.svg";
import tslogo from "/tslogo.svg";
import nextjs from "/nextjs.svg";
import nodejs from "/nodejs.svg";
import reactlogo from "/reactlogo.svg";
import tailwindcss from "/tailwindcss.svg";
import materialUI from "/materialui.svg";
import gitlogo from "/gitlogo.svg";
import figma from "/figma.svg";

const TechStackMarquee = () => {
  return (
      <Marquee className="flex justify-between" gradient gradientColor="#09090B">
        <img src={html} alt="html" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={css3} alt="css3" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={jslogo} alt="JS" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={tslogo} alt="TS" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={nextjs} alt="nextJS" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={nodejs} alt="nodejS" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={reactlogo} alt="React" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={tailwindcss} alt="Tailwind" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={materialUI} alt="Material UI" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={gitlogo} alt="Git" draggable="none" className="mx-40 flex p-4 opacity-50" />
        <img src={figma} alt="Figma" draggable="none" className="mx-40 flex p-4 opacity-50" />
      </Marquee>
  );
};

export default TechStackMarquee;
