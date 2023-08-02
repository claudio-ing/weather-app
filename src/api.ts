import axios from 'axios';
import {
  GeoData, GeoResponse, Optional, WeatherData, WeatherResponse,
} from './common/types';

class Api {
  constructor(readonly server: string, readonly apiKey: string) {
    this.server = server;
    this.apiKey = apiKey;
  }

  async getGeoCoordinates(city: string): Promise<GeoData | undefined> {
    let geoData;
    /* http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} */
    // let apiUrl = `${this.server}/geo/1.0/direct?q=${city}&appId=${this.apiKey}`;

    await axios.get<GeoResponse>(`${this.server}/geo/1.0/direct`, {
      params: {
        q: city,
        appId: this.apiKey,
      },
    })
      .then((response) => {
        const [first] = response.data;
        geoData = first;
      })
      .catch((error: NodeJS.ErrnoException) => {
        console.error(`Geo API call error, ${error.message}`);
      });
    console.log('geoData', geoData);
    return geoData;
  }

  async getGeoWeather(lat: number, lon: number): Promise<Optional<WeatherData>> {
    // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
    let weatherData;
    await axios.get<WeatherResponse>(`${this.server}/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: this.apiKey,
        units: 'metric', // Helps to get the temperature values in Celsius scale (°C)
      },
    })
      .then((response) => {
        console.log(response.data);
        weatherData = response.data;
      })
      .catch((error: NodeJS.ErrnoException) => {
        console.error(`Weather API call error, ${error.message}`);
      });
    return weatherData;
  }
}

const api = new Api(
  'http://api.openweathermap.org',
  'd69dbe30b946b4deb6ccfe5c430f6d4a',
);
export default api;
