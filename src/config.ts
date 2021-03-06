import dotenv from 'dotenv'

// config() will read your .env file, parse the contents, assign it to process.env.
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'development') {
  const envFound = dotenv.config()
  if (envFound.error) {
    throw new Error("Couldn't find .env file")
  }
}
export default {
  port: parseInt(process.env.PORT || '8080', 10),
  grpcPort: parseInt(process.env.GRPC_PORT || '50051', 10),
  swaggerPath: process.env.SWAGGER_PATH || 'src/swagger.json',
  accountServiceUrl: process.env.ACCOUNT_SERVICE_URL || '',
  authenticateApi: process.env.AUTHENTICATE_API || '',
  videoRestServiceUrl: process.env.VIDEO_REST_SERVICE_URL || ''
}
