import { HoverImageLinks } from "./works-image/HoverImageLinks";

const Works = () => {
  return (
    <>
      <div id="cihuy" className="flex w-screen pt-60 pb-20 justify-evenly gap-20">
        <div className="text-7xl font-bold text-gray-100 font-hankenGrotesk w-96 text-right top-14 relative">
          THIS IS WHAT CAFFEINE DID.
        </div>
        <HoverImageLinks />
      </div>
    </>
  );
};

export default Works;
