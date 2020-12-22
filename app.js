const yargs = require("yargs");
const { addNote, removeNote, listNote, readNote } = require("./note");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    removeNote(yargs.argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "View all notes",
  handler: () => listNote(),
});

yargs.command({
  command: "read",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: () => {
    readNote(yargs.argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
