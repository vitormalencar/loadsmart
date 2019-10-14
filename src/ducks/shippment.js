import { createSelector } from 'reselect'
import { fetchShipmentDetail } from '../api'
import { getRoot } from './root'

// Constants
export const FECTH_SHIPMENT_DETAILS_SUCCESS = 'FECTH_SHIPMENT_DETAILS_SUCCESS'
export const FECTH_SHIPMENT_DETAILS_REQUEST = 'FECTH_SHIPMENT_DETAILS_REQUEST'
export const FECTH_SHIPMENT_DETAILS_ERROR = 'FECTH_SHIPMENTS_ERROR'

// Actions
export const fetchShipmentDetailsSuccess = shipments => ({
  type: FECTH_SHIPMENT_DETAILS_SUCCESS,
  shipments,
})

export const fetchShipmentDetailsRequest = loading => ({
  type: FECTH_SHIPMENT_DETAILS_REQUEST,
  loading,
})

export const fetchShipmentDetailsError = error => ({
  type: FECTH_SHIPMENT_DETAILS_ERROR,
  error,
})

// Selectos
export const getShippment = createSelector(
  getRoot,
  ({ shippment }) =>   shippment || {}
)

export const getLoadingState = createSelector(
  getShippment,
  ({ loading }) => loading || false
)

// Thunks
export const fetchShipmentDetails = id => async dispatch => {
  dispatch(fetchShipmentDetailsRequest(true))
  try {
    const { data } = await fetchShipmentDetail(id)
    dispatch(fetchShipmentDetailsSuccess(data))
  } catch (error) {
    dispatch(fetchShipmentDetailsError(error))
    dispatch(fetchShipmentDetailsRequest(false))
  }
}

export const initialState = {
  loading: true,
  id: 1,
  fare: 0,
  shipperRatingScore: 0,
  weight: 0,
  commodity: '',
  equipmentSize: '',
  equipmentType: '',
  map: '',
  stops: [
    {
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      windowStart: '',
      windowEnd: '',
      startTimeZone: '',
      latitude: 0,
      longitude: 0,
      accessorials: [''],
    },
    {
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      windowStart: '',
      windowEnd: '',
      startTimeZone: '',
      latitude: 0,
      longitude: 0,
      accessorials: [''],
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FECTH_SHIPMENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case FECTH_SHIPMENT_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.shipments,
        error: false,
        loading: false,
      }
    case FECTH_SHIPMENT_DETAILS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state
  }
}
