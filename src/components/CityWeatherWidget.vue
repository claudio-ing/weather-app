<template>
  <v-card class="mx-auto">
    <v-card-title>{{widgetTitle}}</v-card-title>
    <v-card-subtitle v-if="isExtremeWeather">
      <v-icon icon="mdi-alert" size="36" color="error" class="me-1 pb-1"></v-icon>
      Extreme Weather Alert
    </v-card-subtitle>
    <v-card-text>
      <div class="d-flex weather-detail">
        <img :src="getIconUrl" height="72" width="72" alt="Weather icon"/>
        <strong class="text-h2 middle pl-2">{{currentTemperature}}&deg;C</strong>
      </div>
      <v-row >
        <v-col cols="12">{{feelsLikeInfo}}&deg;C. {{weatherInfo}}. {{windInfo}}.
        </v-col>
        <v-col cols="6"><v-icon icon="mdi-weather-windy pr-2"></v-icon>{{fullWIndInfo}}</v-col>
        <v-col cols="6">
          <v-icon icon="mdi-water-percent pr-2"></v-icon>{{weather.main.humidity}}%
        </v-col>
       <v-col cols="6">Pressure: {{weather.main.pressure}}hPa</v-col>
       <v-col cols="6">Visibility: {{currentVisibility}}Km</v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang='ts'>
import { computed, toRef } from 'vue';
import { WeatherData } from '@/common/types';
import { capitalizeFirst, formatWindDirection, formatWindStrength } from '@/common/utils';

const props = defineProps<{
    weather: WeatherData;
}>();

const w = toRef(props, 'weather').value;

// API v3.0 is giving 401 Errors, so I switched to v2.5. Alerts data are not available in v2.5
// 20.8 m/s+ ~ Strong gale or worse in Beaufort scale
const isExtremeWeather = computed((): boolean => w.wind.speed > 20.8);

const getIconUrl = computed((): string => `https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`);

const widgetTitle = computed((): string => `${w.name}, ${w.sys.country}`);

const feelsLikeInfo = computed((): string => `Feels like ${Math.round(w.main.feels_like)}`);

const weatherInfo = computed((): string => capitalizeFirst(w.weather[0].description));

const windInfo = computed((): string => formatWindStrength(w.wind.speed));

const currentTemperature = computed((): number => Math.round(w.main.temp));

const fullWIndInfo = computed((): string => `${w.wind.speed} m/s ${formatWindDirection(w.wind.deg)}`);

const currentVisibility = computed((): string => (w.visibility / 1000).toFixed(1));

</script>

<style scoped>
.middle {
    vertical-align: middle;
}
.weather-detail {
    line-height: 72px;
    justify-content: center;
}
</style>
