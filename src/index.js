import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Chalkboard extends Component {
  state = {
    chalk: "",
    notes: []
  };

  updateChalk = (event) => {
    this.setState({ chalk: event.target.value });
  };

  updateNotes = (event) => {
    /*submitting events makes the browser refresh so we use this
    method to prevent that*/
    event.preventDefault();
    //this is copying the old array in order to add it to a new array
    var newNotes = this.state.notes.slice();

    //add current chalk message to copy of notes array

    newNotes.push(this.state.chalk);
    this.setState({ chalk: "", notes: newNotes });
  };

  render() {
    var notes = this.state.notes.map((note) => <li>{note}</li>);

    return (
      <div className="App">
        <form onSubmit={this.updateNotes}>
          <input
            type="text"
            placeholder="type here"
            value={this.state.chalk}
            onChange={this.updateChalk}
          />
          <input type="submit" />
        </form>
        <div className="board">
          <h1 className="chalk"> {this.state.chalk}</h1>
        </div>
        <ul className="notes">{notes}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chalkboard />, rootElement);
