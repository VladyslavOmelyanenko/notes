const getCurrentDate = () => {
  const monthNames = ["January", "February", "Marhc", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const day = (today.getDate() >= 10) ? today.getDate() : "0" + today.getDate();
  return monthNames[today.getMonth()] + " " + day + ", " + today.getFullYear();
}

export default class Note {
  constructor(name, category, content, dates = ""){
    this.name = name;
    this.creationDate = getCurrentDate();
    this.category = category;
    this.content = content;
    this.dates = dates;
  }
}















