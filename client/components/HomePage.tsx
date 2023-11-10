import { useState, useEffect } from 'react'
import {
  getLatestWeather,
  getWeather,
  getTraffic,
  getRealLatestWeather,
} from '../apiClient'
// import { Link } from 'react-router-dom'

function HomePage() {
  const [data, setData] = useState({ weather: {}, traffic: {} })

  useEffect(() => {
    async function updateData() {
      try {
        //const weather = await getLatestWeather()
        const traffic = await getTraffic([42.8984, 71.398])
        const weather = await getRealLatestWeather([42.8984, 71.398])

        setData({
          weather,
          traffic,
        })
      } catch (err) {
        console.error(err.message)
      }
    }

    updateData()
  }, [])

  const { weather, traffic } = data

  console.log(weather.temperature, traffic.currentSpeed)
  const displayTraffic = JSON.stringify(traffic)
  return (
    <>
      {/* */}
      <h1>Location: </h1>
      <div className="traffic">
        <h3>Traffic Status</h3>
        <ul>
          <li>{JSON.stringify(traffic.currentSpeed)} : currentSpeed </li>

          <li>{JSON.stringify(traffic.freeFlowSpeed)} : freeFlowSpeed </li>
          <li>
            {JSON.stringify(traffic.currentTravelTime)} : currentTravelTime
          </li>
          <li>
            {JSON.stringify(traffic.freeFlowTravelTime)} : freeFlowTravelTime
          </li>
          <li>{JSON.stringify(traffic.confidence)} : confidence</li>
          <li>{JSON.stringify(traffic.roadClosure)} : roadClosure</li>
          {/* <li>{{JSON.stringify(traffic.frc)}: currentSpeed</li>
          <li>{JSON.stringify(traffic.frc)}</li> */}
        </ul>
      </div>

      <div className="weather">
        <h3>Weather Condition</h3>
        <ul>
          <li>{weather.dewPoint} : Dew Point </li>
          <li>{weather.humidity} : Humidity </li>
          <li>{weather.iceAccumulation} : Ice Accumulation </li>
          <li>{weather.precipitationIntensity}: Precipitation Intensity</li>
          <li>
            {weather.precipitationProbability} : Precipitation Probability
          </li>
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
      </div>
    </>
  )
}

export default HomePage
