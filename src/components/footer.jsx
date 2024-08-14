import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#6e07f3] w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] py-16">
      <div className="w-[15%] lg:w-[10%]">
        <img src="images/logo.png" alt="logo" />
      </div>
      <div className="my-8 text-white">
        <a href="https://github.com/nraj07054" target="_blank">
          <FontAwesomeIcon className="mx-3 text-3xl" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nraj07054/" target="_blank">
          <FontAwesomeIcon className="mx-3 text-3xl" icon={faLinkedin} />
        </a>
        <a href="mailto:nraj07054@gmail.com" target="_blank">
          <FontAwesomeIcon className="mx-3 text-3xl" icon={faEnvelope} />
        </a>
      </div>
      <p className="font-mono text-lg text-white">
        Handcrafted by © Nikhil Raj Barnwal
      </p>
    </div>
  );
};

export default Footer;
