export interface Weather {
  timelines: Timelines
  location: Location
}

export interface Location {
  lat: number
  lon: number
}

export interface Timelines {
  minutely: Minutely[]
  hourly: Hourly[]
  daily: Daily[]
}

export interface Daily {
  time: Date
  values: Values
}

export interface Values {
  cloudBaseAvg: number
  dewPointAvg: number
  humidityAvg: number
  iceAccumulationAvg: number
  moonriseTime: Date //optional
  moonsetTime: Date //optional
  precipitationProbabilityAvg: number
  rainAccumulationAvg: number
  rainIntensityAvg: number
  sleetAccumulationAvg: number
  sleetIntensityAvg: number
  snowAccumulationAvg: number
  snowDepthAvg?: number
  snowIntensityAvg: number
  sunriseTime: Date //optional
  sunsetTime: Date //optional
  temperatureApparentAvg: number
  temperatureAvg: number
  temperatureMax: number
  temperatureMin: number
  uvHealthConcernAvg?: number
  uvIndexAvg?: number
  visibilityAvg: number
  windDirectionAvg: number
  windGustAvg: number
  windSpeedAvg: number
  // cloudBaseMax:                number;
  // cloudBaseMin:                number;
  // cloudCeilingAvg:             number;
  // cloudCeilingMax:             number;
  // cloudCeilingMin:             number;
  // cloudCoverAvg:               number;
  // cloudCoverMax:               number;
  // cloudCoverMin:               number;
  // dewPointMax:                 number;
  // dewPointMin:                 number;
  // evapotranspirationAvg:       number;
  // evapotranspirationMax:       number;
  // evapotranspirationMin:       number;
  // evapotranspirationSum:       number;
  // freezingRainIntensityAvg:    number;
  // freezingRainIntensityMax:    number;
  // freezingRainIntensityMin:    number;
  // humidityMax:                 number;
  // humidityMin:                 number;
  // iceAccumulationLweAvg:       number;
  // iceAccumulationLweMax:       number;
  // iceAccumulationLweMin:       number;
  // iceAccumulationLweSum:       number;
  // iceAccumulationMax:          number;
  // iceAccumulationMin:          number;
  // iceAccumulationSum:          number;
  // precipitationProbabilityMax: number;
  // precipitationProbabilityMin: number;
  // pressureSurfaceLevelAvg:     number;
  // pressureSurfaceLevelMax:     number;
  // pressureSurfaceLevelMin:     number;
  // rainAccumulationLweAvg:      number;
  // rainAccumulationLweMax:      number;
  // rainAccumulationLweMin:      number;
  // rainAccumulationMax:         number;
  // rainAccumulationMin:         number;
  // rainAccumulationSum:         number;
  // rainIntensityMax:            number;
  // rainIntensityMin:            number;
  // sleetAccumulationLweAvg:     number;
  // sleetAccumulationLweMax:     number;
  // sleetAccumulationLweMin:     number;
  // sleetAccumulationLweSum:     number;
  // sleetAccumulationMax:        number;
  // sleetAccumulationMin:        number;
  // sleetIntensityMax:           number;
  // sleetIntensityMin:           number;
  // snowAccumulationLweAvg:      number;
  // snowAccumulationLweMax:      number;
  // snowAccumulationLweMin:      number;
  // snowAccumulationLweSum:      number;
  // snowAccumulationMax:         number;
  // snowAccumulationMin:         number;
  // snowAccumulationSum:         number;
  // snowDepthMax?:               number;
  // snowDepthMin?:               number;
  // snowDepthSum?:               number;
  // temperatureApparentMax:      number;
  // temperatureApparentMin:      number;
  // uvHealthConcernMax?:         number;
  // uvHealthConcernMin?:         number;
  // uvIndexMax?:                 number;
  // uvIndexMin?:                 number;
  // visibilityMax:               number;
  // visibilityMin:               number;
  // weatherCodeMax:              number;
  // weatherCodeMin:              number;
  // windGustMax:                 number;
  // windGustMin:                 number;
  // windSpeedMax:                number;
  // windSpeedMin:                number;
}

export interface Hourly {
  time: Date
  values: { [key: string]: number | null }
}

export interface Minutely {
  time: Date
  values: { [key: string]: number }
}
