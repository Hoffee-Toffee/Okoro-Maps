import { useState, useEffect } from 'react'
import { getWeather } from '../apiClient.ts'
import { Link } from 'react-router-dom'

function HomePage() {
  const [weather, setWeather] = useState('no data')
 

  useEffect(() => {
    async function updateWeather() {
      try {
        const newWeatherData = await getWeather()
        setWeather(newWeatherData)
       
      } catch (err) {
       console.error(err.message)
      }
    }

    updateWeather()
  }, [])

  return (
    <>
      {weather}
    </>
  )
}

export default HomePage
