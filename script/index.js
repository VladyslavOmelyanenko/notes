import Note from './notes.js';
import {addNote, createForm, createNote} from './noteoperations.js';


let notes = [];
notes.push(
  new Note("Shopping list", "Task", "Tomatoes, bread"),
  new Note("The theory of evolut...", "Random Thought", "The evolution.."),
  new Note("New Feature", "Idea", "Implement new...g"),
  new Note("William Gaddis", "Quote", "Power doesn't co...")
);

const inActiveNotes = document.getElementById('notes').firstElementChild.lastElementChild;


let activeNotes = [];

notes.forEach((note) => {
  addNote(note, inActiveNotes, activeNotes);
});


const createButton = document.getElementById("create-button")
createButton.addEventListener("click", createForm);

document.getElementById('add-note').addEventListener('click', createNote(inActiveNotes, activeNotes));




