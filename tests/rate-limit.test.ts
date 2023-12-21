import request from 'supertest'
import { app } from '../src/index'

describe('Test health', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/health')
      .then((response) => {
        expect(response.status).toBe(200)
        done()
      })
  })
})
