// Write your code here
import {Component} from 'react'
import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onChange = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout click={this.onChange} />
          ) : (
            <Login click={this.onChange} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
