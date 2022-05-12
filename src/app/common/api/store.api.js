import axios from 'axios'

const URL_API = 'https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json'

export const StoreApi = axios.create({
  baseURL: URL_API
})
