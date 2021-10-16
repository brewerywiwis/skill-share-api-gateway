import BadRequestError from '../errors/BadRequestError'
import grpcClient from '../grpcClient'
import { Message } from '../protos/video/Message'
async function searchVideoByCriteria() {}
async function uploadVideo(
  title: string,
  description: string,
  video: Express.Multer.File,
  uid: string
): Promise<Message> {
  return new Promise((resolve, reject) => {
    console.log('upload video here')
    grpcClient.SayHello({ body: 'upload video' }, (err, result) => {
      if (err) {
        reject(new BadRequestError('Upload video failed'))
      }
      console.log(result)
      resolve(result as Message)
    })
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
