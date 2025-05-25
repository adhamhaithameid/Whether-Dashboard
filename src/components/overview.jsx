import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BsCloud } from "react-icons/bs";
import { CiDroplet } from "react-icons/ci";
import { BsCloudHaze2Fill } from "react-icons/bs";
import {weather} from '../App.jsx'

function Overview() {
  // ← 1) add your sample data (replace with real values)
  const windData = [2, 3, 4, 6, 7, 8, 10, 12, 13, 11, 9, 8, 7, 5, 3];
  const max = Math.max(...windData);

  const uv = 5.5;
  const maxUV = 12;

  const uvdata = [{ value: uv, fill: "#60A5FA" }];

  const humidity = 84;

  let Visiblility = 4;

  return (
    <div className="bg-background">
      {/* Title */}
      <div className="flex absolute top-6 left-5">
        <div className="relative ml-5 top-72 items-center justify-center flex">
          <span className="text-base text-secondary_text font-medium">
            Today's Overview
          </span>
        </div>
      </div>

      {/* Wind Status Card */}
      <div className="absolute bg-button_dark ml-8 bottom-64 rounded-2xl p-4 text-white w-64 h-52 transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
        <div className="absolute top-4 left-4 w-56">
          <span className="text-base font-medium">Wind Status</span>
        </div>

        <div className="absolute top-14 left-4 right-4 h-20 flex items-end justify-between">
          {windData.map((val, i) => {
            const pct = (val / max) * 100;
            return (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-button_dark to-[#fff]"
                initial={{ height: 0 }}
                animate={{ height: `${pct}%` }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05, // stagger each bar by 50ms
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>

        <div className="absolute flex bottom-4 left-4 text-3xl font-semibold">
          {weather.wind.speed}
          <span className="relative text-sm ml-1 mt-4">km/h</span>
        </div>
        {/* <div className="absolute flex bottom-4 right-4 text-sm text-secondary_text">
            6:20 AM
        </div> */}
      </div>

      {/* UV Status Card */}
      <div className="absolute bg-button_dark ml-6 left-72 bottom-64 rounded-2xl p-4 text-white w-64 h-52 transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
        <div className="absolute top-4 left-4 text-base font-medium">
          UV Index
        </div>

        {/* Chart */}
        <div className="absolute top-10 left-4 right-4 h-28">
          <RadialBarChart
            width={256}
            height={208}
            cx="112"
            cy="50%"
            innerRadius="65%"
            outerRadius="75%"
            barSize={10}
            startAngle={180}
            endAngle={0}
            data={uvdata}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, maxUV]}
              ticks={[0, 2, 4, 6, 8, 10, 12]}
              tick={{ fill: "#9ca3af", fontSize: 14 }}
              tickLine={false}
              axisLine={false}
            />
            <RadialBar
              minAngle={15}
              background={{ fill: "#D4D4D4" }}
              clockWise
              dataKey="value"
              cornerRadius={16}
            />
          </RadialBarChart>
        </div>

        {/* UV value centered below */}
        <div className="absolute bottom-4 left-0 w-full text-center text-2xl font-semibold">
          {uv.toFixed(2)}
          <span className="text-sm bottom-0">UV</span>
        </div>
      </div>

      {/* Humadity Status Card */}
      <div className="absolute bg-button_dark ml-8 bottom-5 rounded-2xl p-4 text-white w-64 h-52 transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
        <div>
          <h3 className="text-base font-medium">Humidity</h3>
          <div className="mt-4 flex justify-center">
            <BsCloud className="size-20 text-[#CBD5E1]" />
          </div>
          <div className="absolute top-12 left-36 flex justify-center">
            <CiDroplet className="size-8 text-[#CBD5E1]" />
          </div>
        </div>

        <div className="absolute bottom-4 left-0 w-full text-center text-2xl font-semibold">
          {humidity.toFixed(1)}
          <span className="text-sm bottom-0">%</span>
        </div>
      </div>

      {/* Visiblility Status Card */}
      <div className="absolute bg-button_dark bottom-5 ml-6 left-72 rounded-2xl p-4 text-white w-64 h-52  transition duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110">
        <div>
          <h3 className="text-base font-medium">Visiblility</h3>
          <div className="mt-4 flex justify-center">
            <BsCloudHaze2Fill className="size-20 text-[#CBD5E1]" />
          </div>
        </div>

        <div className="absolute bottom-4 left-0 w-full text-center text-2xl font-semibold">
          {weather.visibility}
          <span className="text-sm bottom-0">km</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
