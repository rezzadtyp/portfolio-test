import TechStackMarquee from "./techstackmarquee/TechStackMarquee";

const TechStack = () => {
  return (
    <>
      <div className="grid gap-0 bg-zinc-950 place-items-center">
        <div className="text-3xl font-bold text-gray-100 font-hankenGrotesk text-center opacity-80">
          WHAT TECHNOLOGY THAT I USE?
        </div>
        <TechStackMarquee />
      </div>
    </>
  );
};

export default TechStack;
