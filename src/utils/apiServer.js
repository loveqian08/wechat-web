import {get, post, downFile, Delete} from './http'
import API from './urlConfig'

// 获取会议列表
export const getMeetingList = async (body) => {
  return post(API.GET_MEETING_LIST, {}, body)
}
// 删除会议
export const delMeeting = async (body) => {
  return post(API.DEL_MEETING, {}, body)
}
// 新建会议
export const createMeet = async (body) => {
  return post(API.ADD_MEETING, {}, body)
}
// 选取参会人员
export const getUserList = async (body) => {
  return post(API.GET_USER_LIST, {}, body)
}
// 会议详情
export const meetingDetail = async (params) => {
  return get(API.MEETING_DETAIL, params)
}
// 编辑修改会议
export const updataMeeting = async (body) => {
  return post(API.UPDATA_MEETING, {}, body)
}
// 获取文件列表
export const getFlieList = async (params) => {
  return get(API.GET_FILE_LIST, params)
}
// 会议记录导出
export const exportMeeting = async (params) => {
  return downFile(API.EXPORT_MEETING, params)
}
// 获取会议标记
export const getSignList = async (params) => {
  return get(API.GET_SIGN_DETAIL, params)
}
// 获取会议文件列表
export const getMeetingFileList = async (params) => {
  return get(API.GET_MEETING_FILE, params)
}
// 获取文件详情
export const getFileDetail = async (body) => {
  return post(API.GET_FILE_DETAIL, {}, body)
}
// 保存选择的文件
export const saveChooseFile = async (body) => {
  return post(API.SAVE_FILE_CHOOSE, {}, body)
}
// 用户登录
export const login = async (body) => {
  return post(API.USER_LOGIN, {}, body)
}
// 微信快捷登录
export const fastLogin = async (body) => {
  return post(API.FAST_LOGIN, {}, body)
}
// 保存微信聊天文件
export const saveChatFile = async (body) => {
  return post(API.UPLOAD_CHAT_FILE, {}, body)
}
// 验证短信验证码
export const checkCode = async (body) => {
  return post(API.CHECK_SMS_CODE, {}, body)
}
// 修改密码
export const updatePass = async (body) => {
  return post(API.UPDATE_PASS, {}, body)
}
// 发送短信验证码
export const sendCode = async (body) => {
  return post(API.SEND_SMS_CODE, {}, body)
}
// 修改我的材料列表
export const updataMyFile = async (body) => {
  return post(API.UPDATE_MYFILE_LIST, {}, body)
}
// 获取笔记列表
export const getNoteList = async (params) => {
  return post(API.GET_NOTE_LIST, {}, params)
}
// 获取笔记详情
export const getNoteDetail = async (params) => {
  return get(API.GET_NOTE_DETAIL, params)
}
// 删除笔记
export const deleteNote = async (params, body) => {
  return Delete(API.DELETE_NOTE, params, body)
}
// 获取收藏文件列表
export const getMyFileList = async (body) => {
  return post(API.GET_MYFILE_LIST, {}, body)
}
// 删除收藏文件
export const deleteMyfile = async (params, body) => {
  return Delete(API.DELETE_MYFILE, params, body)
}
// 新增收藏文件
export const addMyfile = async (body) => {
  return post(API.ADD_MYFILE, {}, body)
}
// 新增收藏文件
export const exportNote = async (params) => {
  return get(API.EXPORT_NOTE, params)
}
// 修改昵称
export const updateName = async (body) => {
  return post(API.UPDATE_NAME, {}, body)
}
// 修改头像
export const updatePhoto = async (body) => {
  return post(API.UPDATE_PHOTO, {}, body)
}
// 退出登录
export const userLoginOut = async (body) => {
  return post(API.LOLIN_OUT, {}, body)
}
// 获取头像
export const getPhoto = async (body) => {
  return post(API.GET_PHOTO, {}, body)
}
