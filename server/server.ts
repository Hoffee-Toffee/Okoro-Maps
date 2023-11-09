import * as Path from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import request from 'superagent'
import 'dotenv/config'

// import moc file
import fs from 'node:fs/promises'
//const fs = require('fs')
//try putting this at the top of the file:
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = express()

server.get('/api/v1/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy']
  const index = Math.floor(Math.random() * greetings.length)
  console.log(index)
  res.json({ greeting: greetings[index] })
})

server.use(express.json())
server.use(cors('*' as CorsOptions))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
server.get('/api/v1/weather', async (req, res) => {
  const weatherToken = process.env.WEATHER_TOKEN
  console.log(weatherToken)
  const response = await request.get(weatherToken)
  res.json(response.body.data)
})

server.get('/api/v0/weather', async (req, res) => {
  console.log('working up to here')
  const mockFile = await mockWeatherFile()
  console.log(mockFile)
  res.json(mockFile)
})

async function mockWeatherFile() {
  let data = ''
  const file = __dirname + '/route/mockData.json'

  // console.log('File source : ' + file)
  try {
    const json = await fs.readFile(file, 'utf-8')
    data = JSON.parse(json)
    return data
  } catch (err) {
    console.log('Error: ' + err.message)
  }
  return data
}

export default server
