import { useState, useEffect } from 'react'
import { getLatestWeather } from '../apiClient'
import { getWeather } from '../apiClient.ts'
// import { Link } from 'react-router-dom'

function HomePage() {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    async function updateWeather() {
      try {
        const newWeatherData = await getLatestWeather()
        setWeather(newWeatherData)
      } catch (err) {
        console.error(err.message)
      }
    }

    updateWeather()
  }, [])

  console.log(weather.temperature)
  return (
    <>
      <ul>
        <li>{weather.dewPoint} : Dew Point </li>
        <li>{weather.humidity} : Humidity </li>
        <li>{weather.iceAccumulation} : Ice Accumulation </li>
        <li>{weather.precipitationIntensity}: Precipitation Intensity</li>
        <li>{weather.precipitationProbability} : Precipitation Probability</li>
        <li>{weather.precipitationType}: Precipitation Type</li>
        <li>{weather.rainAccumulation}: Rain Accumulation</li>
        <li>{weather.rainIntensity}: Rain Intensity</li>
        <li>{weather.snowIntensity}: Snow Intensity</li>
        <li>{weather.sleetAccumulation} : Sleet Accumulation: </li>
        <li>{weather.sleetIntensity}: Sleet Intensity</li>
        <li>{weather.snowAccumulation}: Snow Accumulation</li>
        <li>{weather.temperature}: Temperature</li>
        <li>{weather.temperatureApparent}: Temperature Apparent:</li>
        <li>{weather.windDirection} : Wind Direction</li>
        <li>{weather.windGust} : Wind Gust</li>
        <li>{weather.windSpeed} : Wind Speed </li>
      </ul>
    </>
  )
}

export default HomePage
