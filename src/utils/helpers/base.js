export default {
  /**
   * 判断是否为空
   * @param {string} val 字符串
   * @return {boolean}
   */
  isEmpty (val) {
    return val === null || val === undefined || val.trim() === ''
  }
}
