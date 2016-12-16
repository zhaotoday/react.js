import 'date-format-lite'

const DATE_TIME_FORMATTER = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMATTER = 'YYYY-MM-DD'
const TIME_FORMATTER = 'HH:mm:ss'

export default {
  formatDate (dateTimeStr, formatter) {
    if (!dateTimeStr) return ''
    return dateTimeStr.date(formatter)
  },
  getDateTime (dateTimeStr) {
    return this.formatDate(dateTimeStr, DATE_TIME_FORMATTER)
  },
  getDate (dateTimeStr) {
    return this.formatDate(dateTimeStr, DATE_FORMATTER)
  },
  getTime (dateTimeStr) {
    return this.formatDate(dateTimeStr, TIME_FORMATTER)
  }
}
