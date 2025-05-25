import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Datatabs from "./components/Datatabs";
import ForecastStripUI from "./components/ForecastStrip";
import Rain from "./components/Rain";
import Overview from "./components/overview";
import HeroCard from "./components/hero";
import Suggest from "./components/suggest";

var weather;
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=58dfe3aca4e623bf614bf340614fb2fa&units=metric")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
        weather = response.data;
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen w-full bg-background scroll-smooth">
      <Overview data={data} />
      <HeroCard weather={data} />
      <Header />
      <Datatabs />
      <ForecastStripUI weather={data} />
      <Rain />

      <Suggest />
    </div>
  );
};

export default App;

export {weather};