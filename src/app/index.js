import React from 'react'
import actionCreators from '../redux/actions'

import { connect } from 'react-redux'
import { Head, Body, Sidebar, Main } from 'app/layout'

@connect(
  state => ({
    article: state.article
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
