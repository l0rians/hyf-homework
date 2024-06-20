// empty array
const notes = [];
// function for save notes
function saveNote(content, id) {
  notes.push({ content, id, completed: false });
}

// function to get the note by its id
function getNote(id) {
  // checking if is id number, if not, then error
  if (typeof id !== "number") {
    return "Error. ID must be a number";
  }
  // checking all array and return it if it exists
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  //console.log("Note with that ID not found");
}
const getNoteId = getNote(4);

//console.log(getNoteId);

// if we use this function it will make the completed value = true, by default its false.
function markNoteAsCompleted(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].completed = true;
      return notes[i];
    }
  }
  return null;
}

function logOutNotesFormatted() {
  // goint through all array
  for (let i = 0; i < notes.length; i++) {
    // created new variable that takes the status: Completed/Not comtpleted
    let status;
    if (notes[i].completed) {
      status = "Completed";
    } else {
      status = "Not completed";
    }
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}. Status: ${status}`
    );
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
logOutNotesFormatted();
markNoteAsCompleted(1);
logOutNotesFormatted();
