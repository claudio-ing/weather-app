<template>
  <v-container style="max-width:368px">
    <div class="d-flex flex-end no-height">
      <router-link to="/settings">
        <v-icon icon="mdi-cog" size="24" class="relative me-1 pb-1 settings-icon"></v-icon>
      </router-link>
    </div>
    <div v-for="(weather, index) in weatherData" :key="'weather'+index" class="pt-2">
      <CityWeatherWidget v-if="weather" :weather="weather"></CityWeatherWidget>
    </div>
  </v-container>
</template>

<script setup lang='ts'>
import { Optional, LocationData, WeatherData } from '@/common/types';
import api from '@/api';
import { loadStorageData } from '@/utils';
import CityWeatherWidget from './CityWeatherWidget.vue';

const locations: Optional<LocationData[]> = loadStorageData();

const promises: Array<Promise<Optional<WeatherData>>> = [];
locations?.forEach((location) => {
  promises.push(api.getGeoWeather(location.lat, location.lon)); // Create store for this
});

const weatherData = await Promise.all(promises);
</script>

<style>
.flex-end {
  justify-content: flex-end;
}

.relative {
  position: relative;
  top: 18px;
  z-index: 9;
}

.no-height {
  height: 0;
}
</style>
