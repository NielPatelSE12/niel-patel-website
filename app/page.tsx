import React from "react";
import Navbar from "../app/components/Navbar";
import Image from "next/image";
import homepagebg from "./home.jpg";

const Homepage = () => (
  <div className="relative">
    {/* Navbar */}
    <Navbar />

    {/* Homepage Content */}
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={homepagebg}
          alt="Homepage Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-100" 
        />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to the Homepage
          </h1>
          <p className="text-lg mb-8 text-white">
            Bachelors in Software Engineering, Florida Gulf Coast University
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
            LinkedIn Page
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
