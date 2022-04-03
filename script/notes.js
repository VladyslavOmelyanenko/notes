const getCurrentDay = () => {
  const monthNames = ["January", "February", "Marhc", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const day = (today.getDate() >= 10) ? today.getDate() : "0" + today.getDate();
  return monthNames[today.getMonth()] + " " + day + ", " + today.getFullYear();
}

class Note {
  constructor(name, category, content, dates = []){
    this.name = name;
    this.creationDate = getCurrentDay();
    this.category = category;
    this.content = content;
    this.dates = dates;
  }
}

let notes = [];
notes.push(
  new Note("Shopping list", "Task", "Tomatoes, bread"),
  new Note("The theory of evolut...", "Random Thought", "The evolution.."),
  new Note("New Feature", "Idea", "Implement new...g"),
  new Note("William Gaddis", "Quote", "Power doesn't co...")
);

console.log(notes);
