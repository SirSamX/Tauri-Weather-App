import "../lib/weatherTypes";

export default function WeatherCard({
  weatherData,
}: {
  weatherData: WeatherData;
}) {
  return (
    <div className="relative z-10 text-white p-8 max-w-2xl w-full">
      <div className="text-2xl mb-2 font-medium">{`${weatherData.location.name}, ${weatherData.location.country}`}</div>

      <div className="flex items-center mb-4">
        <img
          src={`https:${weatherData.current.condition.icon}`}
          alt={weatherData.current.condition.text}
          className="w-16 h-16 mr-4"
        />
        <span className="text-5xl font-bold">
          {weatherData.current.temp_c}°C
        </span>
      </div>

      <div className="text-xl mb-4">{weatherData.current.condition.text}</div>

      <div className="text-lg mb-2">
        <strong>Wind:</strong> {weatherData.current.wind_mph} mph
      </div>
      <div className="text-lg mb-4">
        <strong>Humidity:</strong> {weatherData.current.humidity}%
      </div>
    </div>
  );
}
