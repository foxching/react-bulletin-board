import React, {Component }  from 'react'
import { FaPen} from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

class Note extends Component {
    
    edit =() => {
        alert('editing..')
    }

    remove =() => {
        alert('removing..')
    }
    render(){

        return (
            <div className="note">
                <p>Learn React</p>
                <span>
                    <button id="add" onClick={this.edit}><FaPen /></button>
                    <button id="remove" onClick={this.remove}><FaTrash /></button>
                </span>
            </div>


        );
    }
}

export default Note