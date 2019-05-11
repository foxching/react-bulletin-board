import React, {Component }  from 'react'
import Note from './Note'


class Board extends Component {
	state ={
		notes:[
			{
				id:1,
				notes:'Call Rechie'
			},{
				id:2,
				notes:'call ruthie'
			}
		]
	}

	render(){
		return (
			<div className="board">
			{
				this.state.notes.map(note => (
					<Note key={note.id} index={note.id} note={note}/>
				))
			}
				
			</div>
		);
	}
}

export default Board