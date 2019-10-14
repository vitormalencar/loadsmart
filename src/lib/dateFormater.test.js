import { formatedHour, shortDate } from './dateFormater'

describe('Date helper', () => {
  it('should return date in correct format', () => {
    expect(shortDate('2016-03-26T14:00:00.000Z')).toEqual(
      'Saturday 26th March 2016'
    )
  })
  it('should return formated hour on default timezone  ', () => {
    expect(formatedHour('2016-03-26T14:00:00.000Z')).toEqual('10:00')
  })
  it('should return formated hour on new timezones  ', () => {
    expect(formatedHour('2016-03-26T14:00:00.000Z', 'Asia/Tokyo')).toEqual(
      '23:00'
    )
  })
})
