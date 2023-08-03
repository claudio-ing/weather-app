import { ref, Ref } from 'vue';
import { Store, defineStore } from 'pinia';
import { Optional, LocationData, WeatherData } from '@/common/types';

import api from '@/api';

export interface WeatherStore extends Store {
  weatherData: Optional<WeatherData>;
  fetchWeatherData: () => Promise<void>;
}

function createWeatherStore(location: LocationData): WeatherStore {
  return defineStore(`weather${location.name}`, () => {
    const weatherData: Ref<Optional<WeatherData>> = ref(undefined);

    async function fetchWeatherData() {
      weatherData.value = await api.getGeoWeather(location.lat, location.lon);
    }

    return { weatherData, fetchWeatherData };
  })();
}

export async function useWeatherStore(location: LocationData): Promise<WeatherStore> {
  const storeInstance: WeatherStore = createWeatherStore(location);
  // Avoid fetching data if store instance is already present for the location
  if (storeInstance.weatherData === undefined) {
    await storeInstance.fetchWeatherData();
  }
  return storeInstance;
}
