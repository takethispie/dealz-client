
import axios from 'axios'

const dev = {
  baseUrl: '=',
  //baseUrl: 'https://localhost:5001/api',
}

const prod = {
  baseUrl: '',
  //baseUrl: 'https://localhost:5001/api'
}

const config = process.env.REACT_APP_STAGE === 'dev' ? dev : prod

axios.defaults.withCredentials = true

export default config