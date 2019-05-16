import React, {Component }  from 'react'
import Note from './Note'
import {FaPlusCircle} from 'react-icons/fa'
import uuid  from 'uuid'
import Draggable from 'react-draggable'


class Board extends Component {
	state ={
		notes:[]
	}
	
	
	componentWillMount() {
		var self = this
		if(this.props.count) {
			fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
				.then(response => response.json())
				.then(json => json[0]
								.split('. ')
								.forEach(sentence => self.addNote(sentence.substring(0, 25))))
		}
	}


	addNote = (txt) => {
		this.setState ( {
			notes:[...this.state.notes, { id:uuid(), note:txt}]
		})
	}	

	
	updateNote = (newTxt, note) => {
		const notes = [...this.state.notes];
		const index = notes.indexOf(note)
		notes[index] = {...note}
		notes[index].note = newTxt
		this.setState({ notes})
	}

	deleteNote = (id) => {
		const notes = this.state.notes.filter(note => note.id !== id)
		this.setState({ notes})
	}

	render(){
		return (
			<div className="board">
				{
					this.state.notes.map(note => (
							<Draggable>
							 <div>
								<Note 
									key={note.id} 
									index={note.id} 
									note={note}
									updateNote={this.updateNote}
									deleteNote={this.deleteNote}
								/>
							  </div>
							</Draggable>
					))
				}
				<button onClick ={() => this.addNote("New Note")} id="add"><FaPlusCircle /></button>
			</div>
		);
	}
}

export default Board