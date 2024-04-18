// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {click} = this.props
    return (
      <button type="button" className="button" onClick={click}>
        Login
      </button>
    )
  }
}
export default Login
