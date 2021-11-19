export interface EditUserRequest {
    password?: string,
    fname?: string,
    lname?: string,
    tel?: string,
    email?: string
}

export interface GetUserByIdListRequest {
    idList: string[]
}