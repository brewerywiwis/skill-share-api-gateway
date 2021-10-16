declare namespace Express {
  export interface Request {
    user?: {
      token: string
      status: boolean
      user: { uid: string; username: string; roles: string[] } | undefined
      time: string
    }
  }
}
