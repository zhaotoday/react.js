import React from 'react'
import styles from './theme/styles'
import ad1 from './theme/images/ad-1.jpg'
import ad2 from './theme/images/ad-2.jpg'
import ad3 from './theme/images/ad-3.jpg'
import ad4 from './theme/images/ad-4.jpg'
import ReactSwipe from 'react-swipe'

export default class extends React.Component {
  state = {
    swipeIndex: 0
  }

  render() {
    const swipeOptions = {
      continuous: true,
      auto: 2500,
      callback: this._handleSwipeCallback.bind(this)
    }

    return <section className={styles.body}>
      <div className={styles.ad}>
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
          <img src={ad1} />
          <img src={ad2} />
          <img src={ad3} />
          <img src={ad4} />
        </ReactSwipe>
        <ol>
          {
            [0, 1, 2, 3].map((item) => {
              return <li className={item === this.state.swipeIndex ? styles.on : ''} />
            })
          }
        </ol>
      </div>
    </section>
  }

  /**
   * swipe 回调
   */
  _handleSwipeCallback(index, elem) {
    this.setState({
      swipeIndex: index
    })
  }
}
