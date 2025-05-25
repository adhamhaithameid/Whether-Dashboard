import React from 'react';
import { IoSunny, IoCloudy, IoRainy } from 'react-icons/io5';
// import HeroCard from "hero.jsx";

import {weather} from '../App.jsx'

export default function ForecastStripUI() {

  
  
  const today = {
    time: '11:45 AM',
    icon: <IoSunny className="w-12 h-12" />,
    sunrise: '6:10 AM',
    sunset: '7:30 PM',
  };

  const nextDays = [
    { day: 'Sat', temp: 10, icon: <IoRainy className="w-10 h-10 mx-auto" /> },
    { day: 'Sun', temp: 15, icon: <IoCloudy className="w-10 h-10 mx-auto" /> },
    { day: 'Mon', temp: 14, icon: <IoSunny className="w-10 h-10 mx-auto" /> },
    { day: 'Tue', temp: 12, icon: <IoRainy className="w-10 h-10 mx-auto" /> },
    { day: 'Wed', temp: 17, icon: <IoSunny className="w-10 h-10 mx-auto" /> },
    { day: 'Thu', temp: 13, icon: <IoCloudy className="w-10 h-10 mx-auto" /> }
  ];

  return (
    <div className="absolute left-4 top-32 overflow-x-auto px-4 pb-4 bg-background">
      <div className="flex space-x-8">
        {/* ── Today Card ── */}
        <div className="min-w-64 bg-button_dark rounded-2xl p-4 text-white flex-shrink-0 transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
          <div className="text-sm justify-self-end">{today.time}</div>
          <div className="-mt-6 text-4xl font-semibold">{weather.main.temp}°</div>
          <div className="justify-self-end">{today.icon}</div>
          <div className="-mt-10 space-y-1 text-sm">
            <div>Real Feel: {weather.main.feels_like}°</div>
            <div>Humidity: {weather.main.humidity}%</div>
            <div>Sunrise: {today.sunrise}</div>
            <div>Sunset: {today.sunset}</div>
          </div>
        </div>

        {/* ── Next 6 Days ── */}
        {nextDays.map((d) => (
          <div
            key={d.day}
            className="min-w-[100px] bg-button_dark transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110 rounded-2xl p-4 text-white flex-shrink-0 text-center"
          >
            <div className="text-sm">{d.day}</div>
            <div className="mt-5">{d.icon}</div>
            <div className="mt-5 text-xl font-medium">{d.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
