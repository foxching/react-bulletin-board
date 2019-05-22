import React, { Component } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

class Note extends Component {
  state = {
    editing: false
  };

  componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150, 'px'),
      top: this.randomBetween(0, window.innerHeight - 150, 'px'),
      transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`
    };
  }

  componentDidUpdate() {
    let textArea;
    if (this.state.editing) {
      textArea = this._newText;
      textArea.focus();
      textArea.select();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.note.note !== nextProps.note.note || this.state !== nextState
    );
  }

  randomBetween(x, y, s) {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  }

  edit = () => {
    this.setState({ editing: true });
  };

  save = e => {
    e.preventDefault();
    this.props.updateNote(this._newText.value, this.props.note);
    this.setState({
      editing: false
    });
  };

  remove = () => {
    this.props.deleteNote(this.props.index);
  };

  renderForm = () => {
    return (
      <div className="note" style={this.style}>
        <form onSubmit={this.save}>
          <textarea
            type="text"
            ref={input => (this._newText = input)}
            defaultValue={this.props.note.note}
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
