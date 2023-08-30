import axios from 'axios'

const getAPIURL = () => {
  return 'http://localhost:3333'
}

export const api = axios.create({
  baseURL: getAPIURL(),
})
