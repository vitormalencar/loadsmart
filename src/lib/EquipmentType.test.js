import { EquipmentTypeIcon, initialState, DRY_VAN } from './EquipmentType'

describe('Icon Helper', () => {
  it('should  return initial state', () => {
    expect(EquipmentTypeIcon()).toEqual({
      ...initialState,
    })
  })
  it('should  return initial if not found', () => {
    expect(EquipmentTypeIcon('RANDOM')).toEqual({
      ...initialState,
    })
  })
  it('should return the correct icon', () => {
    expect(EquipmentTypeIcon(DRY_VAN)).toEqual({
      icon: 'icon_truck_dryvan',
      name: 'Dry Van',
    })
  })
})
