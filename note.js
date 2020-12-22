const fs = require("fs");
const chalk = require("chalk");

// To add note
const addNote = (title, body) => {
  const notes = loadNote();
  const checkNote = notes.find((item) => item.title === title);
  if (!checkNote) {
    notes.push({
      title: title,
      body: body,
    });
    sendNote(notes);
    console.log(chalk.bgYellow.bold.blue("Note has been added"));
  } else {
    console.log(
      chalk.bgRed.white(`${chalk.bold(title)}, is already taken on the note!`)
    );
  }
};
const sendNote = (note) => {
  const dataJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", dataJSON);
};

// To view all data in the note
const listNote = () => {
  const notes = loadNote();
  notes.forEach((item) =>
    console.log(`Title: ${item.title} ${chalk.green("and")} Body: ${item.body}`)
  );
};

// To read specific note
const readNote = (title) => {
  const notes = loadNote();
  const readItem = notes.find((item) => item.title === title);
  if (readItem) {
    console.log(readItem.title);
  } else {
    console.log("Not Found!");
  }
};

// To remove item
const removeNote = (title) => {
  const notes = loadNote();
  const findItem = notes.find((item) => item.title === title);
  if (findItem) {
    const removedNote = notes.filter((item) => item.title !== title);
    sendNote(removedNote);
    console.log(chalk.bgGreen("Note has been deleted!"));
  } else {
    console.log(chalk.red("No Note Found"));
  }
};

const loadNote = () => {
  try {
    const data = JSON.parse(fs.readFileSync("notes.json").toString());
    return data;
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
