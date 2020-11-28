const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
 
yargs.command({
   command: 'add',
   describe: 'Adds a new note!',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'gg',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => notes.addNote(argv.title,argv.body)
})
yargs.command({
   command: 'remove',
   describe: 'Removes the note!',
   builder: {
      title: {
         describe: 'Remove title',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => notes.removeNotes(argv.title)
})
yargs.command({
   command: 'list',
   describe: 'Lists the content!',
   handler: (argv) => notes.listNotes()
})
yargs.command({
   command: 'read',
   describe: 'Reads the note!',
   builder: {
      title: {
         describe: 'Remove title',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => notes.readNote(argv.title)
})

yargs.parse()
