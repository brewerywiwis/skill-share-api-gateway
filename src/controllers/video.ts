import {
  Post,
  Route,
  Tags,
  FormField,
  UploadedFile,
  Security,
  Request,
  Get,
  Path,
} from 'tsoa'
import { AuthenticationType } from '../const/AuthenticationType'
import { VideoUploaded } from '../protos/video/VideoUploaded'
import { VideoUploadResponse } from '../protos/video/VideoUploadResponse'
import videoService from '../services/videoManagement'
import { Request as ExpressRequest } from 'express'
import BadRequestError from '../errors/BadRequestError'
import { Types } from 'mongoose'
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
    const data = await videoService.uploadVideo(
      title,
      description,
      video,
      request.user!.user!.uid
    )
    return data
  }
  @Security(AuthenticationType.JWT, ['BASIC'])
  @Get('')
  public async getAllVideo(): Promise<VideoUploaded[]> {
    const results = await videoService.getAllVideos()
    return results
  }
  @Security(AuthenticationType.JWT, ['BASIC'])
  @Get('/random/:number')
  public async getRandomVideo(
    @Path('number') n: number
  ): Promise<VideoUploaded[]> {
    if (typeof n !== 'number' && n < 1) {
      throw new BadRequestError('Value must greater than 0')
    }
    const results = await videoService.getRandomVideos(n)
    return results
  }
  @Security(AuthenticationType.JWT, ['BASIC'])
  @Get('/:videoId')
  public async getVideoById(
    @Path('videoId') videoId: string
  ): Promise<VideoUploaded[]> {
    if (!Types.ObjectId.isValid(videoId)) {
      throw new BadRequestError('video id must in form object id')
    }
    const results = await videoService.getVideoById(videoId)
    return results
  }
}
