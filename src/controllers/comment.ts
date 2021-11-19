import {
    Body,
    Delete,
    Get,
    Post,
    Put,
    Query,
    Request,
    Route,
    Security,
    Tags,
} from 'tsoa'
import { AuthenticationType } from '../const/AuthenticationType'
import videoManagement from '../services/videoManagement'
import * as commentServiceType from '../types/commentServiceType'

@Tags('comment')
@Route('/comments')
export class commentController {
    @Security(AuthenticationType.JWT, ['BASIC'])
    @Get('/comment')
    public async getComment(
        @Query('videoId') videoId?: string,
        @Query('userId') userId?: string
    ): Promise<any> {
        let param = `comments`
        if (!videoId && !userId) {
            return (await videoManagement.getPlaylist(param)).data
        }
        let querys = []
        if (videoId) {
            querys.push(`videoId=${videoId}`)
        }
        if (userId) {
            querys.push(`userId=${userId}`)
        }
        param += `?${querys.join('&')}`
        return (await videoManagement.getComment(param)).data
    }

    @Security(AuthenticationType.JWT, ['BASIC'])
    @Post('/comment')
    public async createComment(
        @Body() body: commentServiceType.CreateCommentRequest,
        @Request() req: Express.Request
    ): Promise<any> {
        body.userId = req.user?.user?.uid
        return (await videoManagement.createComment(body)).data
    }

    @Security(AuthenticationType.JWT, ['BASIC'])
    @Put('/edit')
    public async editPlaylist(
        @Body() body: commentServiceType.EditCommentRequest,
        @Request() req: Express.Request
    ): Promise<any> {
        body.userId = req.user?.user?.uid
        return (await videoManagement.editComment(body)).data
    }

    @Security(AuthenticationType.JWT, ['BASIC'])
    @Delete('/delete')
    public async deleteComment(
        @Query('id') id: string,
        @Request() req: Express.Request
    ): Promise<any> {
        return (await videoManagement.deleteComment(id, req.user?.user?.uid!)).data
    }
}
