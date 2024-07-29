// src/localStorageHelper.js

export const getNotes = () => {
    const notes = localStorage.getItem('notes');
    return notes ? JSON.parse(notes) : [];
};

export const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

export const addNote = (title, content) => {
    const notes = getNotes();
    const newNote = {
        id: Date.now(),
        title,
        content,
        timestamp: new Date().toLocaleString(),
    };
    notes.push(newNote);
    saveNotes(notes);
};

export const editNote = (id, updatedTitle, updatedContent) => {
    const notes = getNotes();
    const noteIndex = notes.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
        notes[noteIndex] = {
            ...notes[noteIndex],
            title: updatedTitle,
            content: updatedContent,
            timestamp: new Date().toLocaleString(),
        };
        saveNotes(notes);
    }
};

export const deleteNote = (id) => {
    let notes = getNotes();
    notes = notes.filter(note => note.id !== id);
    saveNotes(notes);
};

export const searchNotes = (query) => {
    const notes = getNotes();
    return notes.filter(note => note.title.includes(query) || note.content.includes(query));
};

export const getPaginatedNotes = (page, pageSize) => {
    const notes = getNotes();
    const start = (page - 1) * pageSize;
    return notes.slice(start, start + pageSize);
};
