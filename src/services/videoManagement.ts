import { VideoUploadRequest } from './../protos/video/VideoUploadRequest'
import BadRequestError from '../errors/BadRequestError'
import grpcClient from '../grpcClient'
import { VideoInfo } from '../protos/video/VideoInfo'
import { VideoUploadResponse } from '../protos/video/VideoUploadResponse'

async function searchVideoByCriteria() {}
async function uploadVideo(
  title: string,
  description: string,
  video: Express.Multer.File,
  uid: string
): Promise<VideoUploadResponse> {
  return new Promise((resolve, reject) => {
    console.log('upload video here')

    const req: VideoUploadRequest = {
      info: {
        originalname: video.originalname,
        encoding: video.encoding,
        mimetype: video.mimetype,
        size: video.size.toString(),
      },
      buffer: video.buffer,
    }

    const info: VideoInfo = {
      originalname: video.originalname,
      encoding: video.encoding,
      mimetype: video.mimetype,
      size: video.size.toString(),
    }

    const buffer = video.buffer
    // const stream1 = grpcClient.UploadVideo(info)
    grpcClient.SayHello({ body: 'hello' }, (err, result) => {
      if (err) {
        console.log(err)
        reject(new BadRequestError('Upload video failed'))
      } else {
        console.log(result)
        resolve(result as VideoUploadResponse)
      }
    })
    // const stream = grpcClient.UploadVideo((err, result) => {
    //   if (err) {
    //     console.log(err)
    //     reject(new BadRequestError('Upload video failed'))
    //   } else {
    //     console.log(result)
    //     resolve(result as VideoUploadResponse)
    //   }
    // })
    // stream.write(req)
  })
}

async function editVideo() {}

async function deleteVideo() {}

async function createPlaylist() {}
async function getAllPlaylist() {}
async function getPlaylist() {}
async function editPlaylist() {}

async function deletePlaylist() {}

export default {
  searchVideoByCriteria,
  uploadVideo,
  editVideo,
  deleteVideo,
  createPlaylist,
  getAllPlaylist,
  getPlaylist,
  editPlaylist,
  deletePlaylist,
}
