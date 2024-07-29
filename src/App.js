// src/App.js
import './App.css';
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { addNote, editNote } from './localStorageHelper';

const App = () => {
    const [currentNote, setCurrentNote] = useState(null);

    const handleAddNote = (title, content) => {
        addNote(title, content);
    };

    const handleEditNote = (id, title, content) => {
        editNote(id, title, content);
        setCurrentNote(null);
    };

    const handleEditClick = (note) => {
        setCurrentNote(note);
    };

    return (
        <div className="App">
            <h1>todo Appcd</h1>
            <NoteForm addNote={handleAddNote} editNote={handleEditNote} currentNote={currentNote} />
            <NoteList onEdit={handleEditClick} />
        </div>
    );
};

export default App;
