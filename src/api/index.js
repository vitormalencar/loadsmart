import axios from 'axios'

const API = axios.create({
  baseURL: 'https://loadsmart-coding-test-frontend.herokuapp.com/json/',
  timeout: 10000,
})

export const fetchtShipments = () => API.get('/shipments.json')

export const fetchShipmentDetail = id => API.get(`/shipment-${id}.json`)

export default API
