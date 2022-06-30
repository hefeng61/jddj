import axios from 'axios'

const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { params }).then(res => {
      // if (res.data.code === 0) {
      //   resolve(res.data)
      // } else {
      //   console.log(res.data.msg)
      // }
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  get, post
}
