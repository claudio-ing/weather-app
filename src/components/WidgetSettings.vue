<template>
  <v-container style="max-width:368px">
    <v-form ref="locationForm">
      <v-row style="height:55px;">
        <v-text-field
          v-model="location"
          variant="filled"
          clear-icon="mdi-close-circle"
          clearable
          label="Add location"
          type="text"
          validate-on="submit"
          :rules="[() => !!location || 'Location is required',
                   () => !locations.some((l) => l.name == location) || 'Location already present!!',
              async() => await isValidLocation() || 'Invalid Location!!' ]"
          @click:clear="clearField"
          ></v-text-field>
        <v-btn style="height:inherit; box-shadow: none;" type="submit" ref="submitButton">
          <v-icon icon="mdi-send"></v-icon>
        </v-btn>
      </v-row>
    </v-form>
    <LocationList v-model="locations"/>
    <div class="d-flex flex-end pt-6 pr-1">
      <router-link to="/">
        <v-icon icon="mdi-weather-sunny" color="black" size="24" class="me-1 pb-1">
        </v-icon>
      </router-link>
    </div>
  </v-container>
</template>

<script setup lang='ts'>
import {
  ref, Ref, reactive, watch,
} from 'vue';
import { LocationData } from '@/common/types';
import { loadStorageData, updateStorage } from '../utils';
import LocationList from './LocationList.vue';

import api from '../api';

const location: Ref<string> = ref('');
const isLocationInvalid: Ref<boolean> = ref(false);
const currentGeo: any = reactive({}); // Fix type here??
const locationForm = ref<HTMLFormElement>();
const locations: Ref<Array<LocationData>> = ref(loadStorageData() || []);

function clearField() {
  location.value = '';
  isLocationInvalid.value = false;
  locationForm.value?.resetValidation();
}

async function isValidLocation(): Promise<boolean> {
  // console.log('Calling geo api with:', location.value, ' ...');
  currentGeo.value = await api.getGeoCoordinates(location.value);
  return currentGeo.value !== undefined;
}

function addLocation() {
  if (currentGeo.value !== undefined) {
    const geo = { ...currentGeo.value };
    locations.value.push({
      name: geo.name, lat: geo.lat, lon: geo.lon, country: geo.country, state: geo.state,
    });
    clearField();
  }
}

watch(() => currentGeo, (newVal, oldVal) => { addLocation(); }, { deep: true });

watch(() => locations, (newVal, oldVal) => { updateStorage(newVal.value); }, { deep: true });

</script>
