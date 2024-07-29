// src/components/NoteItem.js

import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
    return (
        <div className="note-item">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <p><small>{note.timestamp}</small></p>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default NoteItem;
