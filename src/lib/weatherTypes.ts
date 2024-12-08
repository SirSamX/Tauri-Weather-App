interface Condition {
  text: string;
  icon: string;
}

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: Condition;
    wind_mph: number;
    humidity: number;
  };
}
