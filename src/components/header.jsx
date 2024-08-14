import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "./Typewriter";
import { Button } from "./ui/button";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const downloadFile = () => {
    const pdfUrl = encodeURI("Nikhil Resume.pdf");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Nikhil Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#6e07f3] border-2 border-[#fff] shadow-lg shadow-[#a3a3a3] rounded-2xl pt-8 px-10 text-white">
      <div className="flex items-center justify-between">
        <div className="w-[4rem]">
          <img src="images/logo.png" alt="logo" />
        </div>
        {/* <div className="flex items-center justify-center font-bold text-lg">
          <div className="mx-5">About</div>
          <div className="mx-5">Portfolio</div>
          <div className="mx-5">Contact</div>
        </div> */}
        <div className="cursor-pointer" onClick={downloadFile}>
          <Button className="bg-white hover:bg-white text-black p-6 font-bold text-xs sm:text-lg">
            Resume <FontAwesomeIcon className="ml-2" icon={faCircleDown} />
          </Button>
          {/* <button className="p-2 md:hidden" onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button> */}
        </div>
      </div>
      <div className="flex justify-start lg:justify-center h-[90%] mt-5 relative">
        <div className="pt-10 pb-10 md:pt-20 lg:pt-40 md:pl-16 flex flex-col">
          <div>
            <h1 className="texl-xl md:text-2xl lg:text-3xl leading-relaxed font-mono">
              <span className="inline-block">I' M</span>
              <br />
              <span
                className="font-bold text-[yellow] mr-3 lg:mt-2"
                style={{
                  fontSize: "clamp(1.2rem, 4vw, 6rem)",
                  display: "inline-block",
                  whiteSpace: "nowrap", // Prevent wrapping
                  width: "calc(18ch + 2rem)",
                }}
              >
                <Typewriter text="Nikhil Raj Barnwal" delay={100} />
              </span>
              <br />
              Full Stack Web Developer
            </h1>
          </div>
          <div>
            <Button className="mt-8 bg-white bg-opacity-0 border-4 border-[#02e404] text-[white] hover:bg-white hover:border-white hover:text-black text-sm md:text-lg px-6 py-2 md:px-10 md:py-6 transition-all duration-300">
              <a href="mailto:nraj07054@gmail.com">Contact Me</a>
            </Button>
          </div>
        </div>
        {/* <div className="hidden lg:block mt-[-1.5rem] max-h-[38rem] max-w-[38rem]">
          <img className="" src="images/developer-image.png" alt="Photo" />
        </div> */}
        <div className="flex-grow flex flex-col justify-end">
          <div className="relative hidden lg:flex items-end justify-end w-full ">
            <img
              className="w-full max-w-[38rem] h-auto object-contain"
              src="images/developer-image.png"
              alt="Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
