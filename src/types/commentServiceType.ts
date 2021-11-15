export interface CreateCommentRequest {
  videoId: string
  userId?: string
  description: string
}

export interface EditCommentRequest {
  id: string
  videoId: string
  userId?: string
  description: string
}
