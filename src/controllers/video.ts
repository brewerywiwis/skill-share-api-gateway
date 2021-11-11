import { DeleteVideoRequest, EditVideoRequest } from './../types/videoServiceType';
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
  Query,
  Body,
  Delete,
  Put,
} from 'tsoa'
import { AuthenticationType } from '../const/AuthenticationType'
import { VideoUploaded } from '../protos/video/VideoUploaded'
import { VideoUploadResponse } from '../protos/video/VideoUploadResponse'
import videoService from '../services/videoManagement'
import { Request as ExpressRequest } from 'express'
import BadRequestError from '../errors/BadRequestError'
import { Types } from 'mongoose'
import { isUUID } from '../utils/uuidValidator'
import { VideoStatusRequest } from '../types/videoServiceType'
import { VideoStatusResponse } from '../protos/video/VideoStatusResponse'
import InternalServerError from '../errors/InternalServerError'

@Tags('video')
@Route('videos')
export class videoController {
  @Security(AuthenticationType.JWT, ['BASIC'])
  @Post('/upload')
  public async uploadVideo(
    @FormField() title: string,
    @FormField() description: string,
    @FormField() permission: string,
    @UploadedFile() video: Express.Multer.File,
    @Request() request: ExpressRequest
  ): Promise<VideoUploadResponse> {
    if (!["public", "private"].includes(permission)){
      throw new BadRequestError('Please check permission of video')
    }
    const data = await videoService.uploadVideo(
      title,
      description,
      video,
      request.user!.user!.uid,
      permission
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
  @Get('/video')
  public async getVideoByCriteria(
    @Query('videoId') videoId?: string,
    @Query('userId') userId?: string
  ): Promise<VideoUploaded[]> {
    if (videoId && !Types.ObjectId.isValid(videoId)) {
      throw new BadRequestError('video id must in form object id')
    }
    if (userId && !isUUID(userId)) {
      throw new BadRequestError('user id must in form uuid4')
    }

    const results = await videoService.getVideoByCriteria(
      videoId ? videoId : '',
      userId ? userId : ''
    )
    return results
  }

  @Post("/video/status")
  public async updateVideoStatus(
    @Body() body: VideoStatusRequest
  ): Promise<VideoStatusResponse>{
    if (body.videoId && !Types.ObjectId.isValid(body.videoId)) {
      throw new BadRequestError('video id must in form object id')
    }
    if (!(body.status == "uploaded" || body.status == "failed" || body.status == "processing")) {
      throw new BadRequestError('please check status input')
    }

    const results = await videoService.updateVideoStatus(
      body.videoId,
      body.status
    )
    if (results.result != "completed"){
      throw new InternalServerError("Some operation failed")
    }
    return results
  }
  @Security(AuthenticationType.JWT, ['BASIC'])
  @Put('/video/edit')
  public async editVideo(@Body() body: EditVideoRequest){
    if (body.videoId && !Types.ObjectId.isValid(body.videoId)) {
      throw new BadRequestError('video id must in form object id')
    }
    if (!["public", "private"].includes(body.permission)){
      throw new BadRequestError('Please check permission')
    }
    if (!body.title || !body.description){
      throw new BadRequestError("Title or Description cannot be null or empty")
    }

    const results = await videoService.editVideo(
      body.videoId,
      body.title,
      body.description,
      body.permission
    )

    return results
  }

  @Security(AuthenticationType.JWT, ['BASIC'])
  @Delete('/video/delete')
  public async deleteVideo(
    @Body() body: DeleteVideoRequest,
    @Request() request: ExpressRequest){
    if (body.videoId && !Types.ObjectId.isValid(body.videoId)) {
      throw new BadRequestError('video id must in form object id')
    }
    const results = await videoService.deleteVideo(
      body.videoId,
      request.user?.user?.uid!
    )
    if (results.result != "deleted"){
      throw new InternalServerError("Some operation failed")
    }
    return results
  }
}

