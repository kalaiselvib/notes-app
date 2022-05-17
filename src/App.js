import React, { useEffect, useState } from 'react'
import './App.css';
import uuid from "react-uuid";
import Header from './components/Header'
import NoteContent from './components/NoteContent';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(false);
  const addNewNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModifiedDate: Date.now(),
    };
    setNotes([newNote, ...notes]);

  };

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])
  return (
    <div className='page-wrapper'>
      <Header />
      <NotesList notes={notes}
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NoteContent activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App