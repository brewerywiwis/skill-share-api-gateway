import {
  Post,
  Route,
  Tags,
  FormField,
  UploadedFile,
  Security,
  Request,
} from 'tsoa'
import { AuthenticationType } from '../const/AuthenticationType'
import { VideoUploadResponse } from '../protos/video/VideoUploadResponse'
import videoService from '../services/videoManagement'
import { Request as ExpressRequest } from 'express'

@Tags('video')
@Route('videos')
export class videoController {
  @Security(AuthenticationType.JWT, ['BASIC'])
  @Post('/upload')
  public async uploadVideo(
    @FormField() title: string,
    @FormField() description: string,
    @UploadedFile() video: Express.Multer.File,
    @Request() request: ExpressRequest
  ): Promise<VideoUploadResponse> {
    console.log(title)
    console.log(description)
    console.log(video)
    console.log(request.user)
    const data = await videoService.uploadVideo(
      title,
      description,
      video,
      request.user!.user!.uid
    )
    return data
  }
}
