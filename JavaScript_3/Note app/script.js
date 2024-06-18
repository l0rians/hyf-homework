// empty array
const notes = [];
// function for save notes
function saveNote(content, id) {
  notes.push({ content, id });
}
// calling fuction with note and its id
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

// console.log(notes);

// function to get the note by its id
function getNote(id) {
  // checking if is id number, if not, then error
  if (typeof id !== "number") {
    console.log("Error. ID must be a number");
    return;
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

function logOutNotesFormatted() {
  // goint through all array
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
