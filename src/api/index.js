import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})

export default {
  async getCandidate(payload) {
    return await api.get(`api/v1/candidates/candidates/${payload}`)
                    .then((response)=>{
                      return response;
                    }).catch((error) => {
                      return error.response
                    })
  }
}