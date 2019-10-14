import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import ShipmentFixture from './fixtures/shipment.fixture.json'
import ShipmentFixtureBefore from './fixtures/shipmentbefore.fixture.json'
import shipmentReducer, {
  FECTH_SHIPMENT_DETAILS_ERROR,
  FECTH_SHIPMENT_DETAILS_REQUEST,
  FECTH_SHIPMENT_DETAILS_SUCCESS,
  getLoadingState,
  getShippment,
  initialState,
  fetchShipmentDetails,
} from './shippment'

import configureStore from '../store'

import { getAction } from '../lib/getActions.js'

const mockStore = configureMockStore([thunk])

describe('Shipment', () => {
  describe('Shippment Thunk', () => {
    it('handles get function and dispatches the right actions on success', async () => {
      const store = mockStore()
      await store.dispatch(fetchShipmentDetails(1))
      expect(await getAction(store, FECTH_SHIPMENT_DETAILS_REQUEST)).toEqual({
        type: FECTH_SHIPMENT_DETAILS_REQUEST,
        loading: true,
      })
      expect(await getAction(store, FECTH_SHIPMENT_DETAILS_SUCCESS)).toEqual({
        type: FECTH_SHIPMENT_DETAILS_SUCCESS,
        shipments: ShipmentFixtureBefore,
      })
    })
  })

  describe('Shipment Selectors', () => {
    it('should return inital state of shipment', () => {
      expect(getShippment(initialState)).toEqual({})
    })

    it('should return the correct loading state', () => {
      const store = configureStore({ shippment: initialState })
      const state = store.getState()
      expect(getLoadingState(state)).toEqual(true)
    })

    it('should return the correct loading on FECTH_SHIPMENT_DETAILS_SUCCESS ', () => {
      const store = configureStore({ shippment: initialState })
      store.dispatch({
        type: FECTH_SHIPMENT_DETAILS_SUCCESS,
        shipments: ShipmentFixture,
      })
      const state = store.getState()

      expect(getLoadingState(state)).toEqual(false)
    })

    it('should return inital state of shipment', () => {
      const store = configureStore()
      store.dispatch({
        type: FECTH_SHIPMENT_DETAILS_SUCCESS,
        shipments: ShipmentFixture,
      })
      const state = store.getState()

      expect(getShippment(state)).toEqual(ShipmentFixture)
    })
  })

  describe('Shipment Reducer', () => {
    it('should start with the initial state ', () => {
      expect(shipmentReducer(undefined, {})).toEqual(initialState)
    })
    it('should Start the loading on FECTH_SHIPMENT_DETAILS_REQUEST ', () => {
      const mockData = { ...initialState, loading: true }
      expect(
        shipmentReducer(initialState, {
          type: FECTH_SHIPMENT_DETAILS_REQUEST,
          loading: true,
        })
      ).toEqual(mockData)
    })

    it('should return shipment detail on FECTH_SHIPMENT_DETAILS_SUCCESS ', () => {
      const mockData = { ...ShipmentFixture, loading: false, error: false }
      expect(
        shipmentReducer(initialState, {
          type: FECTH_SHIPMENT_DETAILS_SUCCESS,
          shipments: ShipmentFixture,
        })
      ).toEqual(mockData)
    })

    it('should return shipment detail on FECTH_SHIPMENT_DETAILS_ERROR ', () => {
      const mockData = { ...initialState, loading: false, error: true }
      expect(
        shipmentReducer(initialState, {
          type: FECTH_SHIPMENT_DETAILS_ERROR,
          error: 'net work fail',
        })
      ).toEqual(mockData)
    })
  })
})
