import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import ShipmentsFixture from './fixtures/shippments.fixture.json'
import ShipmentsFixtureBefore from './fixtures/shippmentbefore.fixture.json'
import shipmentsReducer, {
  initialState,
  FECTH_SHIPMENTS_REQUEST,
  FECTH_SHIPMENTS_ERROR,
  FECTH_SHIPMENTS_SUCCESS,
  getShippments,
  fetchShipments,
} from './shippments'

import configureStore from '../store'
import { getAction } from '../lib/getActions.js'

const mockStore = configureMockStore([thunk])

describe('Shipments', () => {
  describe('Shippments Thunk', () => {
    it('handles get function and dispatches the right actions on success', async () => {
      const store = mockStore()
      await store.dispatch(fetchShipments())
      expect(await getAction(store, FECTH_SHIPMENTS_REQUEST)).toEqual({
        type: FECTH_SHIPMENTS_REQUEST,
        loading: true,
      })
      expect(await getAction(store, FECTH_SHIPMENTS_SUCCESS)).toEqual({
        type: FECTH_SHIPMENTS_SUCCESS,
        shipments: ShipmentsFixtureBefore,
      })
    })
  })

  describe('Shippments reducer', () => {
    it('should start with the initial state ', () => {
      expect(shipmentsReducer(undefined, {})).toEqual(initialState)
    })

    it('should Start the loading on FECTH_SHIPMENTS_REQUEST ', () => {
      const mockData = { ...initialState, loading: true }
      expect(
        shipmentsReducer(initialState, {
          type: FECTH_SHIPMENTS_REQUEST,
          loading: true,
        })
      ).toEqual(mockData)
    })

    it('should Start the loading on FECTH_SHIPMENTS_SUCCESS ', () => {
      const store = configureStore({ shippments: initialState })
      store.dispatch({
        type: FECTH_SHIPMENTS_SUCCESS,
        shipments: ShipmentsFixture,
      })
      const state = store.getState()
      expect(getShippments(state).itens).toEqual(ShipmentsFixture)
    })

    it('should return shipment detail on FECTH_SHIPMENTS_ERROR ', () => {
      const mockData = { loading: false, error: true, itens: [] }
      expect(
        shipmentsReducer(initialState, {
          type: FECTH_SHIPMENTS_ERROR,
          error: 'fail',
        })
      ).toEqual(mockData)
    })
  })
})
