import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            🚀 Welcome to JobFinder! At JobFinder, we aim to bridge the gap
            between job seekers and recruiters by offering an interactive and
            AI-driven job and internship platform. Our platform is designed to
            make the job search process seamless, personalized, and engaging for
            students, freshers, and professionals.
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>
      <div className="leading-8 px-5 text-justify">
        <p>
          💡 Why Choose JobFinder? ✔️ User-Friendly Interface – Simple,
          efficient, and easy to navigate ✔️ AI-Driven Recommendations – Smarter
          job filtering ✔️ Real-Time Engagement – Stay updated with
          notifications & recruiter messages
        </p>
      </div>
    </div>
  );
};

export default About;
