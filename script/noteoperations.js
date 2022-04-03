import Note from './notes.js';

const icons = {
  "Task": "fa-solid fa-list-check",
  "Random Thought": "fa-solid fa-brain",
  "Idea": "fa-solid fa-lightbulb",
  "Quote": "fa-solid fa-quote-right"
};

const getEditButtons = () => {
  const td = document.createElement('td');

  const edit = document.createElement('i');
  edit.className = "fa-solid fa-pen";
  const archive = document.createElement('i');
  archive.className = "fa-solid fa-box";
  const remove = document.createElement('i');
  remove.className = "fa-solid fa-trash";

  td.append(edit, ' ', archive, ' ', remove);

  return td;
};

const getDates = (string) => {
  return string.split(/[\s,]+/).filter((word) => !isNaN(Date.parse(word))).join(", ");
};

const formated = (str) => {
  if (str.length > 23) {
    return str.slice(0, 20) + "..."
  }
  return str;
}


export const addNote = (note, place, storingArray) => {
  const noteLine = document.createElement('tr');
  const td = document.createElement('td');

  const icon = document.createElement('i');
  icon.className = icons[note["category"]];
  td.appendChild(icon);
  noteLine.appendChild(td);

  for (let key in note) {
    const td = document.createElement('td');
    td.append(formated(note[key]));
    noteLine.append(td);
  }

  noteLine.appendChild(getEditButtons());

  place.append(noteLine);

  storingArray.push(note);
};



const form = document.getElementById('create-note');


export const createForm = (categories) => {
  return function(e) {
    const select = document.getElementById('category');
    const options = categories.map((element) => {
      let option = document.createElement('option')
      option.value = element;
      option.append(element);
      return option;
    });
    console.log(options);
    select.append(...options);
    form.className = form.className.replace('hidden', '');
    e.target.className += " hidden";
  }
};

export const createNote = (place, storingArray) => {
  return function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;
    const dates = getDates(content);

    const note = new Note(title, category, content, dates);

    addNote(note, place, storingArray);

    closeForm();
  }
  
};

const closeForm = () => {

  document.getElementById('title').value = "";
  document.getElementById('category').value = "";
  document.getElementById('content').value = "";

  form.className += " hidden";
  const createButton = document.getElementById('create-button');
  createButton.className = createButton.className.replace('hidden', '');
};