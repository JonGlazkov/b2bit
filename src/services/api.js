import axios from 'axios'

export default axios.create({
  baseURL: 'https://frontendproject.b2bit.company',
})

axios.interceptors.response.use(
  response =>
    new Promise(resolve => {
      resolve(response)
    }),
  error => {
    if (!error.response) {
      return new Promise(reject => {
        reject(error)
      })
    }

    if (error.response.status >= 400) {
      localStorage.removeItem('tokens')
    } else {
      return new Promise(reject => {
        reject(error)
      })
    }
  }
)