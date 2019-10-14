import { createSelector } from 'reselect'
import { fetchtShipments } from '../api'
import { getRoot } from './root'

// Constants
export const FECTH_SHIPMENTS_SUCCESS = 'FECTH_SHIPMENTS_SUCCESS'
export const FECTH_SHIPMENTS_REQUEST = 'FECTH_SHIPMENTS_REQUEST'
export const FECTH_SHIPMENTS_ERROR = 'FECTH_SHIPMENTS_ERROR'
export const SELECT_SHIPPMENT = 'SELECT_SHIPPMENT'

// Actions
const fetchShipmentSuccess = shipments => ({
  type: FECTH_SHIPMENTS_SUCCESS,
  shipments,
})

export const selectShippment = id => ({
  type: SELECT_SHIPPMENT,
  id,
})

const fetchShipmentRequest = loading => ({
  type: FECTH_SHIPMENTS_REQUEST,
  loading,
})

const fetchShipmentError = error => ({
  type: FECTH_SHIPMENTS_ERROR,
  error,
})

// Selectos
export const getShippments = createSelector(
  getRoot,
  ({ shippments }) => shippments || {}
)

export const getShippmentsList = createSelector(
  getShippments,
  ({ itens }) => itens || []
)

export const getLoadingState = createSelector(
  getShippments,
  ({ loading }) => loading
)

export const getCurrentShippment = createSelector(
  getShippments,
  ({ currentShippment }) => currentShippment || {}
)

// Thunks
export const fetchShipments = () => async dispatch => {
  dispatch(fetchShipmentRequest(true))
  try {
    const { data } = await fetchtShipments()
    return dispatch(fetchShipmentSuccess(data))
  } catch (error) {
    dispatch(fetchShipmentError(error))
    dispatch(fetchShipmentRequest(false))
  }
}

export const initialState = {
  loading: true,
  itens: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FECTH_SHIPMENTS_REQUEST:
      return {
        ...state,
        loading: action.loading,
      }
    case SELECT_SHIPPMENT:
      return {
        ...state,
        itens: state.itens.map(item =>
          item.id === action.id
            ? { ...item, active: true }
            : { ...item, active: false }
        ),
      }
    case FECTH_SHIPMENTS_SUCCESS:
      return {
        ...state,
        itens: action.shipments.map(item =>
          item.id === 1 ? { ...item, active: true } : { ...item, active: false }
        ),
        error: false,
        loading: false,
      }
    case FECTH_SHIPMENTS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state
  }
}
