<template>
  <v-container style="max-width:368px">
    <div class="d-flex flex-end no-height">
      <router-link to="/settings">
        <v-icon icon="mdi-cog" size="24" class="relative me-1 pb-1 settings-icon"></v-icon>
      </router-link>
    </div>
    <div v-for="(weatherStore, index) in weatherStores" :key="'weather'+index" class="pt-2">
      <WeatherWidget v-if="weatherStore.weatherData" :weather="weatherStore.weatherData">
      </WeatherWidget>
    </div>
  </v-container>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { Optional, LocationData } from '@/common/types';
import { loadStorageData } from '@/common/utils';
import { WeatherStore, useWeatherStore } from '@/store/weather';
import WeatherWidget from './WeatherWidget.vue';

const locations: Optional<LocationData[]> = loadStorageData();

if (!locations) {
  // Force redirect if no config is set
  const router = useRouter();
  router.push({ path: '/settings' });
}

const promises: Array<Promise<WeatherStore>> = [];
locations?.forEach((location) => {
  promises.push(useWeatherStore(location));
});

const weatherStores: WeatherStore[] = await Promise.all(promises);
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
