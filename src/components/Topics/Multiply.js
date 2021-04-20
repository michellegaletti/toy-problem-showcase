import React, { Component } from "react";

export default class Multiply extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      product: null,
    };
  }
  updateNumber1(event) {
    this.setState({ number1: parseInt(event, 10) });
  }

  updateNumber2(event) {
    this.setState({ number2: parseInt(event, 10) });
  }

  multiply(num1, num2) {
    let product = 0;

    product = num1 * num2;
    this.setState({ product: product });
  }

  render() {
    return (
      <div className="puzzleBox productPB">
        <h4> Multiply </h4>
        <input
          className="inputLine"
          onChange={(e) => this.updateNumber1(e.target.value)}
        />
        <input
          className="inputLine"
          onChange={(e) => this.updateNumber2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.multiply(this.state.number1, this.state.number2)}
        >
          Multiply
        </button>
        <span className="resultsBox">Product: {this.state.product}</span>
      </div>
    );
  }
}
