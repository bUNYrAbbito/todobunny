// src/components/NoteForm.js

import React, { useState } from 'react';

const NoteForm = ({ addNote, editNote, currentNote }) => {
    const [title, setTitle] = useState(currentNote ? currentNote.title : '');
    const [content, setContent] = useState(currentNote ? currentNote.content : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentNote) {
            editNote(currentNote.id, title, content);
        } else {
            addNote(title, content);
        }
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button type="submit">{currentNote ? 'Update' : 'Add'} Note</button>
        </form>
    );
};

export default NoteForm;
