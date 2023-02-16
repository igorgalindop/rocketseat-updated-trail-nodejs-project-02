import { env } from './env'
import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
