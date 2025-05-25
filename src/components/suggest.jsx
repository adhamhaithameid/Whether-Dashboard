import React from 'react';
import { IoSunny, IoCloudy, IoRainy } from 'react-icons/io5';

import axios from 'axios';

export async function getWeather(city, countryCode = '') {
  const apiKey = '58dfe3aca4e623bf614bf340614fb2fa'; // Replace with your OpenWeather API key
  const location = countryCode ? `${city},${countryCode}` : city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);
  const data = response.data;

  return {
    city: data.name,
    country: data.sys.country,
    weather: data.weather[0].main,
  };
}

// Example usage
// getWeather('Paris', 'FR').then(console.log).catch(console.error);


import { useEffect, useState } from 'react';


export default function Suggest() {
  const [cities, setCities] = useState([]);

  const initialCities = [
    { city: 'Beijing', countryCode: 'CN' },
    { city: 'California', countryCode: 'US' },
    { city: 'Abu Dhabi', countryCode: 'AE' },
    { city: 'Ottawa', countryCode: 'CA' },
  ];

  useEffect(() => {
    async function fetchWeatherData() {
      const weatherData = await Promise.all(
        initialCities.map(async ({ city, countryCode }) => {
          try {
            const data = await getWeather(city, countryCode);
            let icon;
            switch (data.weather.toLowerCase()) {
              case 'clouds':
                icon = <IoCloudy className="w-10 h-10 text-white" />;
                break;
              case 'clear':
                icon = <IoSunny className="w-10 h-10 text-white" />;
                break;
              case 'rain':
              case 'drizzle':
              case 'thunderstorm':
                icon = <IoRainy className="w-10 h-10 text-white" />;
                break;
              default:
                icon = <IoCloudy className="w-10 h-10 text-white" />;
            }

            return {
              country: data.country,
              city: data.city,
              weather: data.weather,
              icon,
            };
          } catch (error) {
            console.error(`Failed to fetch weather for ${city}:`, error.message);
            return {
              country: countryCode,
              city,
              weather: 'Unavailable',
              icon: <IoCloudy className="w-10 h-10 text-white" />,
            };
          }
        })
      );

      setCities(weatherData);
    }

    fetchWeatherData();
  }, []);

  return (
    <div className="absolute bottom-5 right-14">
      <h2 className="text-xl font-semibold text-white mb-4">Other Cities</h2>
      <div className="space-y-4">
        {cities.map(({ country, city, weather, icon }) => (
          <div
            key={city}
            className="flex items-center justify-between bg-button_dark rounded-2xl p-4 w-64 h-24 duration-300 ease-in-out transform hover:shadow-lg hover:brightness-110"
          >
            <div className="space-y-1">
              <p className="text-xs uppercase text-third_text">{country}</p>
              <p className="text-lg font-medium text-white">{city}</p>
              <p className="text-sm text-secondary_text">{weather}</p>
            </div>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

