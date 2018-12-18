import axios from 'axios'

const Http = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 10000
})

export default Http
