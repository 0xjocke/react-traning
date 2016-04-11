import React, {Component} from 'react' // New ES6 import syntax

// Component
class CurrentValue extends Component {
  render(){
    return (
      <input value={this.props.value} />
    )
  }
}
export default CurrentValue
