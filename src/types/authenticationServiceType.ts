export type SignUpRequest = {
  username: string
  password: string
  fname: string
  lname: string
  tel: string
  email: string
}

export interface SignInRequest {
  username: string
  password: string
}
import { VideoUploadRequest } from '../protos/video/VideoUploadRequest'
export type a = VideoUploadRequest
export type b = SignInRequest
