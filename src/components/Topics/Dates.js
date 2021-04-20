import React, { Component } from "react";

export default class Dates extends Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      month: 0,
      year: 0,
      birthday: null,
      userInput: "",
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  updateBirthday(userInput) {
    let day = 0;
    let month = 0;
    let year = 0;
    let birthday = null;
    if (userInput.length === 8) {
      if (
        (userInput[0] <= 2 && userInput[1] <= 9) ||
        (userInput[0] === 3 && userInput[1] <= 1)
      ) {
        day = "" + userInput[0] + userInput[1];
        this.setState({ day: day });
      } else {
        this.setState({ birthday: "Not a valid birthday." });
      }

      month = "" + userInput[2] + userInput[3];
      this.setState({ month: month });

      year = "" + userInput[4] + userInput[5] + userInput[6] + userInput[7];
      this.setState({ year: year });

      birthday = day + "/" + month + "/" + year;
      console.log(birthday);
    } else {
      birthday = "Please enter birthday in format DDMMYYYY";
    }
    this.setState({ birthday: birthday });
  }

  render() {
    return (
      <div className="puzzleBox birthdayPB">
        <h4> Birthday </h4>
        <input
          className="inputLine"
          placeholder="DDMMYYYY"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.updateBirthday(this.state.userInput)}
        >
          Stylize Birthday
        </button>
        <span className="resultsBox filterStringRB">
          Birthday: {this.state.birthday}
        </span>
      </div>
    );
  }
}
