import axios from 'axios'

export const getUserList = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/user')
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const login = data => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/login', data)
      .then(res => {
        console.log(res)
        resolve(res)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}
