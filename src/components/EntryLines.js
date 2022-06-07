import React from 'react';
import EntryLine from "./EntryLine";

const EntryLines = ({entries}) => (
    entries.map((entry) => (
        <EntryLine
            description={entry.description}
            amount={entry.value}
            isExpense={entry.isExpense}
        />
    ))
)

export default EntryLines;
