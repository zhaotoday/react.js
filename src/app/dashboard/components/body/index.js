import React from 'react'
import styles from './theme/styles'
import ad1 from './theme/images/ad-1.png'
import ad2 from './theme/images/ad-2.png'
import ad3 from './theme/images/ad-3.png'
import ad4 from './theme/images/ad-4.png'
import ReactSwipe from 'react-swipe';

export default class extends React.Component {
  render() {
    return <section className={styles.body}>
      <div className={styles.ad}>
        <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
          <img src={ad1} />
          <img src={ad2} />
          <img src={ad3} />
          <img src={ad4} />
        </ReactSwipe>
      </div>
    </section>
  }
}
