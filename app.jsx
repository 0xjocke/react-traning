// var React = require('react')  // old
import React, {Component} from 'react' // New ES6 import syntax
import ReactDOM from 'react-dom';
import CurrentValue from './current-value.jsx'
import SpecialButton from './special-button.jsx'


//Container Component
class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    }
  }

  componentWillMount() {
  }

  handleIncreaseButtonClick(){
    this.setState({
      value: this.state.value + 1
    })

  }
  handleDecreaseButtonClick(){
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return (
      <div>
        <h1> {this.props.appName} </h1>
        <CurrentValue value={this.state.value}/>
        <SpecialButton onButtonClick={this.handleIncreaseButtonClick.bind(this)}>
          +
        </SpecialButton>
        <SpecialButton onButtonClick={this.handleDecreaseButtonClick.bind(this)}>
          -
        </SpecialButton>

      </div>
    )
  }
}

ReactDOM.render(
  <CounterContainer appName="Test" />,
  document.querySelector('#app')
)
