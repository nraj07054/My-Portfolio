import React from "react";

const About = () => {
  return (
    <div className="my-20 md:my-32 px-10">
      <div className="mb-24">
        <h1 className="text-2xl md:text-5xl py-3 font-mono">About</h1>
        <hr
          className=" w-40"
          style={{ height: "4px", backgroundColor: "#00ffdb" }}
        />
        <p className="w-[100%] md:w-[70%] py-8 text-sm md:text-xl font-mono">
          As a dedicated full-stack developer proficient in HTML, CSS,
          JavaScript, React, Node.js, MongoDB, and many more skills, I excel in
          designing and building dynamic web applications that deliver seamless
          user experiences. I am committed to writing clean, maintainable code,
          staying updated with industry trends, and translating business
          requirements into robust technical solutions.
        </p>
      </div>
      <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] py-20 px-20 flex flex-col items-center justify-center bg-[#6e07f3]">
        <h1 className="text-2xl md:text-5xl font-bold mb-10 font-mono text-white">
          My Skills
        </h1>
        <div className="flex items-center justify-center flex-wrap">
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[white] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/html.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">HTML</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/css.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">CSS</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/javascript.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">Javascript</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/nodejs-icon.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">NodeJS</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/express-js.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">ExpressJS</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/react-js.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">ReactJS</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/mongodb.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg lg:text-xl font-bold">MongoDB</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/google-firebase.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">Firebase</p>
          </div>
          <div className="rounded-2xl h-40 w-40 lg:h-60 lg:w-60 py-4 px-8 mx-8 my-8 flex flex-col justify-center items-center bg-[white] border-2 border-[#00ffdd6f] shadow-md shadow-[#02e404]">
            <img
              className="h-20 sm:h-40"
              src="images/c++-icon.png"
              alt="skill-image"
            />
            <p className="font-mono text-lg md:text-xl font-bold">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
