import logo from "/logo.svg";

const Header = () => {
  return (
    <div
      id="navbar"
      className="flex fixed font-hankenGrotesk justify-between place-items-center w-screen px-20 py-10 z-40"
    >
      <div id="left-nav" className="flex">
        <img src={logo} alt="logo" />
      </div>
      <div id="right-nav" className="flex">
        <ul className="text-gray-100 flex w-1/2 gap-x-40 text-l">
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">WORKS</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
