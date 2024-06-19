import React, {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: false}

  toggleLogin = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      return (
        <button className="button" onClick={this.toggleLogin}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="button" onClick={this.toggleLogin}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
