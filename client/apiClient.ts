import request from 'superagent'

export async function getWeather(): Promise<string> {
  const res = await request.get('/api/v0/weather')
  return res.body
}

export async function getLatestWeather(): Promise<object> {
  const res = await request.get('/api/v0/weather')
  console.log(res)
  const timeline = await res.body.data.timelines[0]
  // [0].intervals.length
  const latestWeather = timeline.intervals[timeline.intervals.length - 1]
  // console.log(latestWeather.values)
  return latestWeather.values
}

export async function getTraffic(coordinates: number[]): Promise<object> {
  const res = await request.post('/api/v1/traffic').send({ coordinates })
  console.log(res)

  const data = await res.body.flowSegmentData
  return {
    ...data,
    coordinates: undefined,
  }
}

export async function getRealLatestWeather(
  coordinates: number[]
): Promise<object> {
  const res = await request.post('/api/v1/weather').send({ coordinates })

  console.log(await res.body)
  const timeline = await res.body.timelines[0]
  // [0].intervals.length
  const latestWeather = timeline.intervals[timeline.intervals.length - 1]
  // console.log(latestWeather.values)
  return latestWeather.values
}
