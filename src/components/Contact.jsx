const Contact = () => {
  return (
    <>
      <div className="flex w-screen h-screen justify-around gap-20 place-items-center">
        <div className="text-7xl font-bold text-gray-100 font-hankenGrotesk w-96 text-right top-14 relative">
          CONTACT ME.
        </div>
        <div className="text-2xl font-normal text-gray-100 font-hankenGrotesk w-1000 text-left top-14 relative">
          <ul className="grid gap-6 mx-10">
            <li className="flex border-b-2 justify-between place-items-center">
              <a href="#">LinkedIn</a>
              <span>
                <img
                  className="w-5 h-5"
                  src="/arrow-right-up.svg"
                  alt="arrow"
                />
              </span>
            </li>
            <li className="flex border-b-2 justify-between place-items-center">
              <a href="#">Instagram</a>
              <span>
                <img
                  className="w-5 h-5"
                  src="/arrow-right-up.svg"
                  alt="arrow"
                />
              </span>
            </li>
            <li className="flex border-b-2 justify-between place-items-center">
              <a href="#">E-mail</a>
              <span>
                <img
                  className="w-5 h-5"
                  src="/arrow-right-up.svg"
                  alt="arrow"
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
