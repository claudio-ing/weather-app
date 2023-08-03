import axios from 'axios';
import {
  GeoData, GeoResponse, Optional, WeatherData, WeatherResponse,
} from './common/types';

class Api {
  constructor(readonly server: string, readonly apiKey: string) {
    this.server = server;
    this.apiKey = apiKey;
  }

  async getGeoCoordinates(city: string): Promise<Optional<GeoData>> {
    let geoData;

    await axios.get<GeoResponse>(`${this.server}/geo/1.0/direct`, {
      params: { q: city, appId: this.apiKey },
    })
      .then((response) => {
        const [first] = response.data;
        geoData = first;
      })
      .catch((error: NodeJS.ErrnoException) => {
        console.error(`Geo API call error, ${error.message}`);
      });
    return geoData;
  }

  async getGeoWeather(lat: number, lon: number): Promise<Optional<WeatherData>> {
    let weatherData;
    await axios.get<WeatherResponse>(`${this.server}/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: this.apiKey,
        units: 'metric', // Get the temperature values in Celsius scale (°C)
      },
    })
      .then((response) => {
        weatherData = response.data;
      })
      .catch((error: NodeJS.ErrnoException) => {
        console.error(`Weather API call error, ${error.message}`);
      });
    return weatherData;
  }
}

const api = new Api('http://api.openweathermap.org', 'd69dbe30b946b4deb6ccfe5c430f6d4a');
export default api;
