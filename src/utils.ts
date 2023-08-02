import { LocationData, Optional } from '@/common/types';

const LOCATION_STORAGE_KEY: string = 'location';

/* Conversion from degrees to cardinal points.
   @see http://snowfence.umn.edu/Components/winddirectionanddegreeswithouttable3.htm
*/
export function formatWindDirection(deg: number): string {
  if (deg < 11.25 || deg >= 348.75) return 'N';
  if (deg >= 11.25 || deg < 33.75) return 'NNE';
  if (deg >= 33.75 || deg < 56.25) return 'NE';
  if (deg >= 56.25 || deg < 78.75) return 'ENE';
  if (deg >= 78.75 || deg < 101.25) return 'E';
  if (deg >= 101.25 || deg < 123.75) return 'ESE';
  if (deg >= 123.75 || deg < 146.25) return 'SE';
  if (deg >= 146.25 || deg < 168.75) return 'SSE';
  if (deg >= 168.75 || deg < 191.25) return 'S';
  if (deg >= 191.75 || deg < 213.75) return 'SSW';
  if (deg >= 213.75 || deg < 236.25) return 'SW';
  if (deg >= 236.25 || deg < 258.75) return 'WSW';
  if (deg >= 258.75 || deg < 281.25) return 'W';
  if (deg >= 281.25 || deg < 303.25) return 'WNW';
  if (deg >= 303.75 || deg < 326.25) return 'NW';
  return 'NNW';
}

export function updateStorage(data: LocationData[]): void {
  localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(data));
}

export function loadStorageData(): Optional<LocationData[]> {
  const data: string | null = localStorage.getItem(LOCATION_STORAGE_KEY);
  if (!data) {
    return undefined;
  }
  return JSON.parse(data);
}

export function capitalizeFirst(sentence: string): string {
  if (sentence.length === 0) {
    return sentence;
  }
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

/* Get wind strength classification based on speed, using Beaufort scale
  @see https://en.wikipedia.org/wiki/Beaufort_scale
*/
export function formatWindStrength(speed: number): string {
  if (speed < 0.5) return 'Calm';
  if (speed >= 0.5 && speed < 1.6) return 'Light air';
  if (speed >= 1.6 && speed < 3.4) return 'Light breeze';
  if (speed >= 3.4 && speed < 5.5) return 'Gentle breeze';
  if (speed >= 5.5 && speed < 8) return 'Moderate breeze';
  if (speed >= 8 && speed < 10.8) return 'Fresh breeze';
  if (speed >= 10.8 && speed < 13.9) return 'Strong breeze';
  if (speed >= 13.9 && speed < 17.2) return 'High wind, moderate gale';
  if (speed >= 17.2 && speed < 20.8) return 'Gale';
  if (speed >= 20.8 && speed < 24.5) return 'Strong gale';
  if (speed >= 24.5 && speed < 28.5) return 'Storm';
  if (speed >= 28.5 && speed < 32.6) return 'Violent storm';
  return 'Hurricane';
}
