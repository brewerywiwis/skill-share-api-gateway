import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './protos/video'
import config from './config'
import path from 'path'

function loadVideoProto() {
  const PROTO_PATH = path.join(__dirname, 'protos', 'video.proto')
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  })
  const videoProto = grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown as ProtoGrpcType
  return videoProto
}

const videoProto = loadVideoProto()

function init() {
  const host = process.env.VIDEO_SERVICE_HOST || '0.0.0.0'
  const client = new videoProto.video.VideoService(
    `${host}:${config.grpcPort}`,
    grpc.credentials.createInsecure()
  )
  console.log(`grpc client is connected to ${host}:${config.grpcPort}`)
  return client
}

export default init()
