import { VideoUploadRequest } from './../protos/video/VideoUploadRequest'
import BadRequestError from '../errors/BadRequestError'
import grpcClient from '../grpcClient'
import { VideoInfo } from '../protos/video/VideoInfo'
import { VideoUploadResponse } from '../protos/video/VideoUploadResponse'
import { Empty } from '../protos/video/Empty'
import { Metadata } from '@grpc/grpc-js'
import { VideoUploaded } from './../protos/video/VideoUploaded'
import { VideoStatusResponse } from '../protos/video/VideoStatusResponse'
import * as playlistServiceType from '../types/playlistServiceType'
import * as commentServiceType from '../types/commentServiceType'
import axios from 'axios'
import config from '../config'

async function searchVideoByCriteria() {}

async function uploadVideo(
  title: string,
  description: string,
  video: Express.Multer.File,
  uid: string,
  permission: string
): Promise<VideoUploadResponse> {
  return new Promise((resolve, reject) => {
    if (video.mimetype !== 'video/mp4') {
      throw new BadRequestError('Only MP4 is allowed')
    }
    const stream = grpcClient.UploadVideo((err, result) => {
      if (err) {
        console.log(err)
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
        status: 'processing',
        permission: permission,
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
async function getAllVideos(): Promise<VideoUploaded[]> {
  return new Promise((resolve, reject) => {
    const call = grpcClient.GetAllVideo({})
    const results: VideoUploaded[] = []
    call.on('data', function (videoUploaded: VideoUploaded) {
      results.push(videoUploaded)
    })
    call.on('end', function () {
      resolve(results)
    })
    call.on('error', function (e) {
      reject(e)
    })
  })
}

async function getRandomVideos(n: number): Promise<VideoUploaded[]> {
  return new Promise((resolve, reject) => {
    const call = grpcClient.GetRandomVideo({ number: n })
    const results: VideoUploaded[] = []
    call.on('data', function (videoUploaded: VideoUploaded) {
      results.push(videoUploaded)
    })
    call.on('end', function () {
      resolve(results)
    })
    call.on('error', function (e) {
      reject(e)
    })
  })
}

async function getVideoById(videoId: string): Promise<VideoUploaded[]> {
  return new Promise((resolve, reject) => {
    const call = grpcClient.GetVideoByCriteria({ id: videoId })
    const results: VideoUploaded[] = []
    call.on('data', function (videoUploaded: VideoUploaded) {
      results.push(videoUploaded)
    })
    call.on('end', function () {
      resolve(results)
    })
    call.on('error', function (e) {
      reject(e)
    })
  })
}
async function getVideoByCriteria(
  videoId: string,
  userId: string
): Promise<VideoUploaded[]> {
  return new Promise((resolve, reject) => {
    const request: any = {}
    if (videoId) {
      request['id'] = videoId
    }
    if (userId) {
      request['userId'] = userId
    }
    const call = grpcClient.GetVideoByCriteria(request)
    const results: VideoUploaded[] = []
    call.on('data', function (videoUploaded: VideoUploaded) {
      results.push(videoUploaded)
    })
    call.on('end', function () {
      resolve(results)
    })
    call.on('error', function (e) {
      reject(e)
    })
  })
}

async function updateVideoStatus(
  videoId: string,
  status: string
): Promise<VideoStatusResponse> {
  return new Promise((resolve, reject) => {
    const request: any = {}
    if (videoId) {
      request['id'] = videoId
    }
    if (status) {
      request['status'] = status
    }
    const call = grpcClient.UpdateVideoStatus(request, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result as VideoStatusResponse)
      }
    })
  })
}
async function editVideo(
  videoId: string,
  title: string,
  description: string,
  permission: string
): Promise<VideoInfo> {
  return new Promise((resolve, reject) => {
    const request: any = {}
    if (videoId) {
      request['videoId'] = videoId
    }
    if (title) {
      request['title'] = title
    }
    if (description) {
      request['description'] = description
    }
    if (permission) {
      request['permission'] = permission
    }
    const call = grpcClient.EditVideo(request, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result as VideoInfo)
      }
    })
  })
}

async function deleteVideo(
  videoId: string,
  uid: string
): Promise<VideoStatusResponse> {
  return new Promise((resolve, reject) => {
    const request: any = {}
    if (videoId) {
      request['id'] = videoId
    }
    if (uid) {
      request['uid'] = uid
    }
    const call = grpcClient.DeleteVideo(request, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result as VideoStatusResponse)
      }
    })
  })
}

async function createPlaylist(
  body: playlistServiceType.createPlaylistRequest,
  userId: string
) {
  return await axios({
    url: `${config.videoRestServiceUrl}/playlists/playlist`,
    method: 'POST',
    data: body,
    headers: { 'Content-Type': 'application/json' },
  })
}
async function getPlaylist(param: string) {
  return await axios({
    url: `${config.videoRestServiceUrl}/${param}`,
    method: 'GET',
  })
}
async function editPlaylist(body: playlistServiceType.editPlaylistRequest) {
  return await axios({
    url: `${config.videoRestServiceUrl}/playlists/edit`,
    method: 'PUT',
    data: body,
    headers: { 'Content-Type': 'application/json' },
  })
}

async function deletePlaylist(id: string, userId: string) {
  return await axios({
    url: `${config.videoRestServiceUrl}/playlists/delete?id=${id}&userId=${userId}`,
    method: 'DELETE',
  })
}

async function createComment(body: commentServiceType.CreateCommentRequest) {
  return await axios({
    url: `${config.videoRestServiceUrl}/comments/comment`,
    method: 'POST',
    data: body,
    headers: { 'Content-Type': 'application/json' },
  })
}
async function getComment(param: string) {
  return await axios({
    url: `${config.videoRestServiceUrl}/${param}`,
    method: 'GET',
  })
}
async function editComment(body: commentServiceType.EditCommentRequest) {
  return await axios({
    url: `${config.videoRestServiceUrl}/comments/edit`,
    method: 'PUT',
    data: body,
    headers: { 'Content-Type': 'application/json' },
  })
}
async function deleteComment(id: string, userId: string) {
  return await axios({
    url: `${config.videoRestServiceUrl}/comments/delete?commentId=${id}&userId=${userId}`,
    method: 'DELETE',
  })
}

export default {
  searchVideoByCriteria,
  uploadVideo,
  editVideo,
  deleteVideo,
  getAllVideos,
  getRandomVideos,
  updateVideoStatus,
  getVideoById,
  getVideoByCriteria,
  createPlaylist,
  getPlaylist,
  editPlaylist,
  deletePlaylist,
  createComment,
  getComment,
  editComment,
  deleteComment,
}
