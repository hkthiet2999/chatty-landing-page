import capture1 from "../assets/capture1.png";
import capture2 from "../assets/capture2.png";
import capture3 from "../assets/capture3.png";

import ImageBanner from "./Banner";

function Header() {
    const images = [
        capture1,
        capture2,
        capture3
    ];
  return (
      <header className="text-center py-5 md:py-14">
          <h1 className="text-xl md:text-4xl dark:text-white">
              Download <span className="font-extrabold">Chatty App</span> for computers
          </h1>
          <p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">
              The Chatty App app is now available on Windows, Mac OS, Linux, and Web.
          </p>

          <div className="flex justify-center items-center mt-10">
              <ImageBanner images={images}/>
          </div>

      </header>

  );
}

export default Header;
