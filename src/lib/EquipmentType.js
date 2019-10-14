// Simple map functions to display the correct name and icon
// also this could be expanded for internacionalization
export const DRY_VAN = 'DRV'
export const AIRPORT = 'airport'
export const LUMPER = 'lumper'
export const LIFT_GATE = 'lift_gate'
export const PALET_JACK = 'pallet_jack'

export const initialState = {
  icon: '',
  name: '',
}

export const EquipmentTypeIcon = type => {
  switch (type) {
    case DRY_VAN:
      return {
        icon: 'icon_truck_dryvan',
        name: 'Dry Van',
      }
    case AIRPORT: {
      return {
        icon: 'icon_accessorial_airport',
        name: 'Aiport',
      }
    }
    case PALET_JACK:
      return {
        icon: 'icon_accessorial_pallet_jack',
        name: 'Pallet Jack',
      }
    case LIFT_GATE:
      return {
        icon: 'icon_accessorial_lift_gate',
        name: 'Lift Gate',
      }
    case LUMPER:
      return {
        icon: 'icon_accessorial_lumper',
        name: 'Lumper',
      }
    default:
      return initialState
  }
}
