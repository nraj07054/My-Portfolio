import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-5xl font-bold mb-5 font-mono">
          My Portfolio
        </h1>
        <span className="font-mono">
          Here are few of my projects that I've worked on.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-start w-[77%] my-8">
          <img
            className="h-48 border-4 border-[#fff] p-1 rounded-2xl shadow-lg shadow-[#909090]"
            src="images/natours-project-img.png"
            alt="project-img"
          />
          <p className="mt-10 ml-0 md:mt-0 md:ml-20 text-2xl sm:text-3xl font-bold font-mono text-[#6e07f3]">
            Natour's Frontend
            <br />
            Website
          </p>
        </div>
        <hr className="w-48" />
        <div className="flex md:flex-row-reverse flex-col items-start md:items-end justify-start w-[77%] my-8">
          <img
            className="h-48 border-4 border-[#fff] p-1 rounded-2xl shadow-lg shadow-[#909090]"
            src="images/synchronous-chat-app-img.png"
            alt="project-img"
          />
          <p className="mt-10 mr-0 md:mt-0 md:mr-20 text-2xl sm:text-3xl font-bold font-mono text-[#6e07f3]">
            Chat App
            <br />
            using MERN and Socket.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
