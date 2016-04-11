import React, {Component} from 'react' // New ES6 import syntax

// Component
class CurrentValue extends Component {

  handleChange(event){
    this.props.myOnChange(event)
  }

  render(){
    return (
      <input value={this.props.value} onChange={this.handleChange.bind(this)} />
    )
  }
}
export default CurrentValue
