import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(noteItem) {
    console.log(noteItem);
    setNoteArray((prevNotes) => {
      return [...prevNotes, noteItem];
    });
  }

  function deleteNote(deleteID) {
    setNoteArray((prevNotes) => {
      return prevNotes.filter((note, index) => index !== deleteID);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteArray.map((noteItem, id) => {
        return (
          <Note
            key={id}
            id={id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
