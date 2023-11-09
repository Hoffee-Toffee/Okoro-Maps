import request from 'superagent'

export async function getWeather(): Promise<string> {
  const res = await request.get('/api/v0/weather')
  return res.body.greeting
}
