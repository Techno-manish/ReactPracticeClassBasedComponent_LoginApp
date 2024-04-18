// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {click} = this.props
    return (
      <button type="button" className="button" onClick={click}>
        Logout
      </button>
    )
  }
}
export default Logout
