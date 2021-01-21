import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (product) => {
    console.log(product)
    this.setState({value: this.state.value + 1});
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({id: 1});
  // }

  // handleDecrement = () => {
  //   this.setState({count: this.state.count - 1});
  // }

  render() {
    console.log('props', this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
        {/* <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
