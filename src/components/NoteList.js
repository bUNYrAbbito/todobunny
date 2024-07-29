// src/components/NoteList.js

import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';
import { getPaginatedNotes, deleteNote, searchNotes, getNotes } from '../localStorageHelper';

const NoteList = ({ onEdit }) => {
    const [notes, setNotes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const notes = getPaginatedNotes(currentPage, 10);
        setNotes(notes);
    }, [currentPage]);

    const handleDelete = (id) => {
        deleteNote(id);
        setNotes(getPaginatedNotes(currentPage, 10));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filteredNotes = searchNotes(e.target.value);
        setNotes(filteredNotes.slice(0, 10));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <div>
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} onEdit={onEdit} onDelete={handleDelete} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(getNotes().length / 10)}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default NoteList;
