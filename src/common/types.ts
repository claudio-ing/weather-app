export interface GeoLocation {
  lat: number;
  lon: number;
}

export interface GeoData extends GeoLocation {
  country: string;
  local_names: object;
  name: string;
  state: string;
}

export type LocationData = Omit<GeoData, 'local_names'>;

export type GeoResponse = Array<GeoData>;

export type WeatherDetail = {
  feels_like: number,
  humidity: number,
  pressure: number,
  temp: number,
  temp_max: number,
  temp_min: number
}

type WindDetail = {
  speed: number,
  deg: number
}

type SysDetail = {
  country: string,
  id: number,
  sunrise: number,
  sunset: number,
  type: number
}

export type WeatherInfo = {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface WeatherData {
  base: string,
  coord: GeoLocation,
  cod: number,
  dt: number,
  id: number,
  main: WeatherDetail,
  name: string,
  sys: SysDetail,
  timezone: number,
  visibility: number,
  weather: Array<WeatherInfo>
  wind: WindDetail,
  rain?: object,
  snow?: object,
 }

export type WeatherResponse = Array<WeatherData>;

export interface HTTPResponse<T> {
  data: Array<T>,
  status: number,
  statusText: string,
  headers: object,
  config: object,
  request: XMLHttpRequest
}

export interface GeoApiResponse extends HTTPResponse<GeoData> {}

export interface WeatherApiResponse extends HTTPResponse<WeatherData> {}

export type Optional<T> = T | undefined
