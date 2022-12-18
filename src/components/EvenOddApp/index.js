import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrement = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const textDisplay = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="EvenOddApp-container">
          <h1 className="main-count-heading">Count {count}</h1>
          <p className="text-display">Count is {textDisplay}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="text">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
