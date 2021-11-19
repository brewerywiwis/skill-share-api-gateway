import { Body, Delete, Get, Post, Put, Query, Request, Route, Security, Tags } from "tsoa";
import { AuthenticationType } from "../const/AuthenticationType";
import videoManagement from "../services/videoManagement";
import * as playlistServiceType from "../types/playlistServiceType"

@Tags("playlist")
@Route("/playlists")
export class playlistController {
    @Security(AuthenticationType.JWT, ['BASIC'])
    @Get("/playlist")
    public async getPlaylist(@Query("creatorId") creatorId?: string, @Query("id") id?: string, @Query("title") title?: string): Promise<any> {
        let param = `playlists`
        if (!creatorId && !id && !title) {
            return await videoManagement.getPlaylist(param);
        }
        let querys = []
        if (id) {
            querys.push(`id=${id}`)
        }
        if (creatorId) {
            querys.push(`creatorId=${creatorId}`)
        }
        if (title) {
            querys.push(`title=${title}`)
        }
        param += `?${querys.join("&")}`
        return await videoManagement.getPlaylist(param);
    }

    @Security(AuthenticationType.JWT, ['BASIC'])
    @Post("/playlist")
    public async createPlaylist(@Body() body: playlistServiceType.createPlaylistRequest, @Request() req: Express.Request): Promise<any> {
        body.userId = req.user?.user?.uid
        return (await videoManagement.createPlaylist(body, req.user?.user?.uid!)).data
    }

    @Security(AuthenticationType.JWT, ['BASIC'])
    @Put("/edit")
    public async editPlaylist(@Body() body: playlistServiceType.editPlaylistRequest, @Request() req: Express.Request): Promise<any> {
        body.userId = req.user?.user?.uid
        return (await videoManagement.editPlaylist(body)).data
    }

    @Security(AuthenticationType.JWT, ['BASIC'])
    @Delete("/delete")
    public async deletePlaylist(@Query("id") id: string, @Request() req: Express.Request): Promise<any> {
        return (await videoManagement.deletePlaylist(id, req.user?.user?.uid!)).data
    }


}
