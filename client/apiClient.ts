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
