import React from 'react';
import EntryLine from "./EntryLine";

const EntryLines = ({entries, editEntry}) => (
    entries.map((entry) => (
        <EntryLine
            key={entry.id}
            {...entry}
            editEntry={editEntry}
        />
    ))
)

export default EntryLines;
