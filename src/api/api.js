import axios from 'axios'
axios.defaults.withCredentials = true

//获取table数据
export const getData = () => {
  return axios.post('/api/user/allList')
}
// 获取单条数据
export const getOneData = (param) => {
  return axios.post('/api/user/list', param)
}
// 更新数据
export const updateData = (param) => {
  return axios.post('/api/user/update', param)
}
// 删除单条数据
export const delOneData = (param) => {
  return axios.post('/api/user/delete', param)
}
// 删除多条数据
export const deleteData = (param) => {
  return axios.post('/api/user/delall', param)
}

// 登录请求
export const getUserInfo = (param) => {
  return axios.post('/api/user/login', param)
}
