import { VideoUploadRequest } from './../protos/video/VideoUploadRequest'
import BadRequestError from '../errors/BadRequestError'
import grpcClient from '../grpcClient'
import { VideoInfo } from '../protos/video/VideoInfo'
import { VideoUploadResponse } from '../protos/video/VideoUploadResponse'
import { Metadata } from '@grpc/grpc-js'

async function searchVideoByCriteria() {}
async function uploadVideo(
  title: string,
  description: string,
  video: Express.Multer.File,
  uid: string
): Promise<VideoUploadResponse> {
  return new Promise((resolve, reject) => {
    if (video.mimetype !== 'video/mp4') {
      throw new BadRequestError('Only MP4 is allowed')
    }
    const stream = grpcClient.UploadVideo((err, result) => {
      if (err) {
        // console.log(err)
        reject(new BadRequestError('Upload video failed'))
      } else {
        // console.log(result)
        resolve(result as VideoUploadResponse)
      }
    })
    const req1: VideoUploadRequest = {
      info: {
        originalname: video.originalname,
        encoding: video.encoding,
        mimetype: video.mimetype,
        size: video.size.toString(),
        creator: uid,
        title: title,
        description: description,
      },
    }
    stream.write(req1)
    const arrByte = video.buffer
    let count = 0
    while (count * 1024 < arrByte.byteLength) {
      const start = count * 1024 * 1024
      const req3: VideoUploadRequest = {
        buffer: arrByte.subarray(start, start + 1024 * 1024),
      }
      count += 1
      stream.write(req3)
      //   console.log(count * 1024)
    }
    stream.end()
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
