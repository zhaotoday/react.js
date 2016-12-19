const localStorage = window.localStorage

export default {
  /**
   * 设置存储
   * @param key {string} 键值
   * @data data {object} 数据
   */
  set(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  },

  /**
   * 获取存储
   * @param key {string} 键值
   */
  get(key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  },

  /**
   * 移除存储
   * @param key {string} 键值
   */
  remove(key) {
    localStorage.removeItem(key)
  },

  /**
   * 清空存储
   */
  clear() {
    localStorage.clear()
  }
}
