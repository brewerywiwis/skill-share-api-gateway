export interface VideoStatusRequest {
    videoId: string
    status: string
  }

export interface EditVideoRequest{
    videoId: string
    title: string
    description: string
    permission: string
}
export interface DeleteVideoRequest{
    videoId: string
}