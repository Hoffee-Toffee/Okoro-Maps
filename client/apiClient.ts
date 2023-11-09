import request from 'superagent'

export async function getWeather(): Promise<string> {
  const res = await request.get('/api/v1/weather')
  return res.body.greeting
}
