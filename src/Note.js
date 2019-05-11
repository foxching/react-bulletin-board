import React, {Component }  from 'react'
import { FaPen} from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';

class Note extends Component {
    state = {
        editing:false
    }

    edit =() => {
        this.setState({editing:true})
    }

    save =(e) => {
        alert('')
    }

    remove =() => {
        alert('removing...')
    }

    renderForm = () => {

        return (
            <div className="note">
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button onClick={this.save}><FaSave /></button>
                </form>
            </div>

        );
    }

    renderDisplay =() =>{

        return (
            <div className="note">
                <p>{this.props.note.notes}</p>
                <span>
                    <button id="edit" onClick={this.edit}><FaPen /></button>
                    <button id="remove" onClick={this.remove}><FaTrash /></button>
                </span>
            </div>


        );
    }

    render(){

        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default Note