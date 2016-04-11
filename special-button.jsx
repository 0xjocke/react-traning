import React, {Component} from 'react' // New ES6 import syntax

// Component
class SpecialButton extends Component {
  handleClick(){
    this.props.onButtonClick()
  }
  render(){
    return (
      <button onClick={this.handleClick.bind(this)}> {this.props.children} </button>
    )
  }
}
export default SpecialButton
