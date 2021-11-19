import axios from "axios"
import config from "../config"
import { EditUserRequest, GetUserByIdListRequest } from "../types/accountServiceType"

async function changePassword() { }
async function editProfile() { }
async function getUserByUsername(token: string, username: string) {
  return await axios({
    url: `${config.accountServiceUrl}/api/v1/user?username=${username}`,
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
  })
}

async function editUser(token: string, body: EditUserRequest) {
  return await axios({
    url: `${config.accountServiceUrl}/api/v1/user`,
    method: 'PUT',
    data: body,
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
  })
}

async function getUserByIdList(body: GetUserByIdListRequest) {
  return await axios({
    url: `${config.accountServiceUrl}/api/v1/users/list`,
    method: 'POST',
    data: body,
    headers: { 'Content-Type': 'application/json' },
  })
}

export default {
  changePassword,
  editProfile,
  getUserByUsername,
  editUser,
  getUserByIdList
}
