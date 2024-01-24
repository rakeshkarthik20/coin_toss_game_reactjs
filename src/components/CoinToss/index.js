// Write your code here
import {Component} from 'react'
import './index.css'

export default class CoinToss extends Component {
  state = {coinSide: 'head', head: 0, tail: 0, total: 0}

  changeCoin = () => {
    const {head, tail, total} = this.state
    // const updateCoinSide = coinSide === 'head' ? 'tail' : 'head'

    let updateHead = head
    let updateTail = tail
    // if (coinSide === 'head') {
    //   updateTail = tail + 1
    // } else {
    //   updateHead = head + 1
    // }
    // this.setState({
    //   coinSide: updateCoinSide,
    //   total: total + 1,
    //   head: updateHead,
    //   tail: updateTail,
    // })
    const tossResult = Math.floor(Math.random() * 2)
    let updateCoinSide = 'head'
    if (tossResult === 0) {
      updateCoinSide = 'head'
      updateHead = head + 1
    } else {
      updateCoinSide = 'tail'
      updateTail = tail + 1
    }
    this.setState({
      coinSide: updateCoinSide,
      total: total + 1,
      head: updateHead,
      tail: updateTail,
    })
  }

  render() {
    const {coinSide, head, tail, total} = this.state
    // console.log(coinSide)
    let url = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    if (coinSide === 'head') {
      url = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      url = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={url} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.changeCoin}>
            Toss Coin
          </button>
          <div className="scoreContainer">
            <p className="total score">Total:{total}</p>
            <p className="heads score">Heads:{head}</p>
            <p className="tails score">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
