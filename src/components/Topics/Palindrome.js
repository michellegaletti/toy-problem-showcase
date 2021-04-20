import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  handleChange(event) {
    this.setState({ userInput: event });
  }

  isPalindrome(userInput) {
    let frwd = userInput;
    let bkwd = userInput;
    //Divides a string into an ordered list of substrings
    bkwd = bkwd.split("");
    bkwd = bkwd.reverse();
    //Puts back together the ordered list of substrings into a single string
    bkwd = bkwd.join("");
    if (frwd === bkwd) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Palindrome: {this.state.palindrome}{" "}
        </span>
      </div>
    );
  }
}
