// var React = require('react')  // old
import React, {Component} from 'react' // New ES6 import syntax
import ReactDOM from 'react-dom';
import CurrentValue from './current-value.jsx'
import SpecialButton from './special-button.jsx'


//Error Component
class ErrorComponent extends Component{
  render(){
    return(
      <p>{this.props.error}</p>)
  }
}

//Container Component
class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      error: ""
    }
  }

  componentWillMount() {
  
  }

  componentDidMount(){

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

  handleTyping(event){
    var input = +event.target.value
    if(isNaN(input)==false){
      // resetError()
      this.setState({
      value: input,
      error: ''
      })  
    }else{
      this.setState({
        error: 'Please type in only numbers'
        })
    }    
  }


  render() {
    return (
      <div>
        <h1> {this.props.appName} </h1>
        <ErrorComponent error={this.state.error} />
        <CurrentValue myOnChange={this.handleTyping.bind(this)} value={this.state.value}/>
        <SpecialButton myOnButtonClick={this.handleIncreaseButtonClick.bind(this)}>
          +
        </SpecialButton>
        <SpecialButton myOnButtonClick={this.handleDecreaseButtonClick.bind(this)}>
          -
        </SpecialButton>

      </div>
    )
  }
}

ReactDOM.render(
  <CounterContainer appName="Counter" />,
  document.querySelector('#app')
)
