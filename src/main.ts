import config from './config'
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import { RegisterRoutes } from './routes'
import errorHandler from './middlewares/errorHandler'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(cors())

// const allowedOrigins = [
//   'http://localhost:2000',
//   'http://localhost:3000',
//   'https://cdpn.io',
// ]
// app.use((req, res, next) => {
//   const origin = req.headers.origin
//   if (origin && allowedOrigins.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin)
//     res.header(
//       'Access-Control-Allow-Methods',
//       'POST, GET, PUT, PATCH, DELETE, OPTIONS'
//     )
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Content-Type, Option, Authorization'
//     )
//   }
//   next()
// })

app.use(bodyParser.json())

app.use('/docs', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('./swagger.json')))
})

RegisterRoutes(app)
app.use(errorHandler)

console.log(`Back-End server is running on port ${config.port}`)
app.listen(config.port)
