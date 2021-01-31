import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("hello cons");
  }
  state = {
    count:0
  };
  add = () => {
    console.log("add");
    this.setState( current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState( current => ({count: current.count - 1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I jus updated");
  }
  render(){
    console.log("render")
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
 