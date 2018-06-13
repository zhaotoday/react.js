import React from 'react'
import i18n from 'i18n'
import connect from 'react-redux/lib/connect/connect'
import actionCreators from '../../../redux/actions'
import PropTypes from 'prop-types'

@connect(
  state => ({
    articles: state.articles
  }),
  dispatch => ({
    getArticles: (options) => dispatch(actionCreators.getArticles(options)),
    postArticleAuthor: (options) => dispatch(actionCreators.postArticleAuthor(options))
  })
)
export default class extends React.Component {
  constructor () {
    super()
    this.t = i18n.getT('articles')
  }

  static propTypes = {
    getArticles: PropTypes.func,
    postArticleAuthor: PropTypes.func
  }

  componentDidMount () {
    this.props.getArticles({
      params: {
        title: 'the title'
      }
    })

    this.props.postArticleAuthor({
      article_id: 123,
      data: {
        title: 'the title'
      }
    })
  }

  render () {
    return <div>add { this.t('test') } { this.t('article') }</div>
  }
}
