import Redis from 'ioredis'

export const client = new Redis({
  port: 6389
})
