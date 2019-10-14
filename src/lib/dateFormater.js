import moment from 'moment-timezone'

export const formatedHour = (date, timezone = 'America/New_York') =>
  moment(date)
    .tz(timezone)
    .format('H:mm')

export const shortDate = (date, timezone = 'America/New_York') =>
  moment(date)
    .tz(timezone)
    .format('dddd Do MMMM YYYY')
