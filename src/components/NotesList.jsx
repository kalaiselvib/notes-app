import React from 'react'
import styled from 'styled-components';
import { BsPlusLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai"
function NotesList({ notes, addNewNote, deleteNote, activeNote, setActiveNote }) {
    return (
        <NotesWrapper>
            <div className="addNote">
                <button onClick={addNewNote}> <BsPlusLg className='icon' /> Add Note</button>
            </div>


            {notes.map((note) => (
                <Note key={note.id} onClick={() => setActiveNote(note.id)} className={`${note.id === activeNote && "active"}`}>
                    <div className="note-title">{note.title}</div>
                    <div className="note-body">{note.body && note.body.substr(0, 100) + "..."}</div>
                    <div className="note-date"> Last Modified : {""}
                        {new Date(note.lastModifiedDate).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                    <AiFillDelete className="note-deleteIcon" onClick={() => deleteNote(note.id)} />
                </Note>
            ))}





        </NotesWrapper>
    )
}

const NotesWrapper = styled.div`
width:300px;

position:absolute;
left:0px;
height:100%;
padding:0.5rem 0rem;
 border-right: 1px solid #ddd;
font-family: 'Open Sans', sans-serif;
 
`;
const Note = styled.div`

position:relative;

padding:0.5rem 0.3rem;
cursor:pointer;

border-bottom:0.5px solid #d7d4d4;
.note-title{
    font-size:15px;
    font-weight:500;
    padding: 0.3rem 0rem;
}
.note-body{
    font-size:14px;
    font-weight:400;
    padding: 0.3rem 0rem;
    overflow: hidden;
    width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.note-date{
    font-size:12px;
    font-weight:300;
    padding: 0.3rem 0rem;
    color:#747373;
    
}
.note-deleteIcon{
    position:absolute;
    top:3px;
    right:3px;
    cursor:pointer;
}
`;
export default NotesList