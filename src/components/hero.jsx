import React from 'react';
import bgImage from '../assets/Blue Pink Yellow Abstract Painting copy.webp';

export default function HeroCard() {
  return (
    <div className="absolute bottom-5 left-144 ml-4 w-121 h-111 rounded-2xl overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={bgImage}
        alt="World wind & ocean map"
        className="absolute inset-0 w-full h-full rounded-2xl object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-30 transition duration-300 ease-in-out" />

      {/* Top label */}
      <div className="absolute top-4 inset-x-4">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl px-4 py-2">
          <p className="text-center text-sm font-medium text-white">
            Explore global map of wind weather and ocean condition
          </p>
        </div>
      </div>

      {/* Get Started button */}
<a
  href="https://earth.nullschool.net/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    absolute bottom-6 left-1/2 transform -translate-x-1/2
    bg-background text-white font-semibold text-sm
    px-6 py-2 rounded-2xl shadow-2xl inline-block text-center

    transition duration-300 ease-in-out
    hover:scale-105 hover:shadow-2xl
    hover:brightness-110
    focus:outline-none focus:ring-2
    focus:ring-offset-2 focus:ring-white
    active:scale-95
  "
>
  GET STARTED
</a>


    </div>
  );
}
