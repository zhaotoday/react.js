import React from 'react'
import actionCreators from '../redux/actions'
import connect from 'react-redux/lib/components/connect'

import { Head, Body, Sidebar, Main } from 'app/layout'
import 'themes/global'

@connect(
  state => ({
    articles: state.articles
  }),
  dispatch => ({
    postArticle: (options) => dispatch(actionCreators.postArticle(options))
  })
)
class Comp extends React.Component {
  componentDidMount() {
    this.props.postArticle({
      data: {
        title: 'the title'
      }
    })
  }

  render() {
    return <div>
      <Head />
      <Body>
        <Sidebar ref="sidebar" />
        <Main>
          {this.props.children}
        </Main>
      </Body>
    </div>
  }
}

module.exports = Comp
