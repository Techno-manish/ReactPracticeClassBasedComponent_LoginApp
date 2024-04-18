// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {isLoggedIn} = this.props
    return isLoggedIn ? (
      <h1 className="heading">Welcome User</h1>
    ) : (
      <h1 className="heading">Please Login</h1>
    )
  }
}
export default Message
