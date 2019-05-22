import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

class Note extends Component {
  state = {
    editing: false,
    noteVal: this.props.note.note
  };

  componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px'),
      transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
    };
  }

  randomBetween(x, y, s) {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  }

  edit = () => {
    this.setState({ editing: true });
  };

  save = e => {
    e.preventDefault();
    const newText = e.target.elements.TextMessage.value;
    this.props.updateNote(newText, this.props.note);
    this.setState({
      editing: false
    });
  };

  remove = () => {
    this.props.deleteNote(this.props.note.id);
  };

  onChange = e => {
    this.setState({ noteVal: e.target.value });
  };

  renderForm = () => {
    return (
      <div className="note" style={this.style}>
        <form onSubmit={this.save}>
          <textarea
            type="text"
            name="TextMessage"
            value={this.state.noteVal}
            onChange={this.onChange}
          />
          <button type="submit" id="save">
            <FaSave />
          </button>
        </form>
      </div>
    );
  };

  renderDisplay = () => {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.note.note}</p>
        <span>
          <button id="edit" onClick={this.edit}>
            <FaPen />
          </button>
          <button id="remove" onClick={this.remove}>
            <FaTrash />
          </button>
        </span>
      </div>
    );
  };

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Note;
