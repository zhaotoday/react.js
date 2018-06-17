export default {
  /**
   * 判断是否为空
   * @param {string} value 字符串
   * @return {boolean}
   */
  isEmpty (value) {
    return value === null || value === undefined || value.trim() === ''
  },

  getImage ({ path = '' }) {
    const cdn = 'http://localhost:88'

    return `${cdn}/${path}`
  },

  getIcon ({ path = '' }) {
    const cdn = 'http://localhost:88'

    return `${cdn}/icons/${path}`
  }
}
