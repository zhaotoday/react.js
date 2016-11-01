import React from 'react'
import i18n from 'i18n'

module.exports = class extends React.Component {
  constructor() {
    super()
    this.t = i18n.getT('articles')
  }

  render() {
    return <div>add {this.t('test')} {this.t('article')}</div>
  }
}
