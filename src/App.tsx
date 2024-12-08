import { useState, useEffect } from "react";
import RaindropEffect from "./components/RaindropEffect";
/*import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";
 import { invoke } from "@tauri-apps/api/core";*/
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");

  const fetchWeatherData = async (city: string) => {
    if (city.trim().length == 0) {
      setWeatherData(null);
      return
    };

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=c7596911d9f04282bee163344242311&q=${city}&lang=de`
      );
      
      if (!response.ok) {
        setWeatherData(null);
        return;
      }
      
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetchWeatherData(city);
  };

  /*async function sendAnnoyingNotification() {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (permissionGranted) {
      sendNotification({
        title: "Eiermann",
        body: "DING DONG DER EIERMANN IST DA!!!",
      });
    }
  }*/

  return (
    <div className="flex flex-col items-center relative w-full h-screen bg-gradient-to-b from-blue-700 to-blue-900">
      <div className="absolute inset-0 z-0">
        <RaindropEffect />
      </div>

      <h1 className="text-4xl font-semibold mt-5">Weather App</h1>

      {weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <h1>Loading...</h1>
      )}

      <div className="flex mb-4 relative z-10">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="p-2 rounded-l-md text-black"
          placeholder="Enter city name"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-r-md"
        >
          Search
        </button>
      </div>
    </div>
  );
}
