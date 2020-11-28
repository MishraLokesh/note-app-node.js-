const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
   const notes = loadNotes()
   const duplicateNotes = notes.filter((note) => note.title === title)
   if(duplicateNotes.length === 0) {
      notes.push({
         title: title,
         body: body
      })
      saveNotes(notes)
      console.log(chalk.green.inverse('New note added!'))
   }
   else console.log(chalk.red.inverse('Note title taken!'))
}

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
   try{
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
   }
   catch(e) {
      return []
   }
}

const removeNotes = (title) => {
   const Rnote = loadNotes()
   const duplicateNotes = Rnote.filter((note) => note.title === title)
   if(duplicateNotes.length !== 0) {
      const newNote = Rnote.filter((note) => note.title !== title)
      saveNotes(newNote)
      console.log(chalk.green.inverse('Note removed successfully!'))
   }
   else console.log(chalk.red.inverse("Note does not exist!"))
}

const listNotes = () => {
   console.log(chalk.cyan.inverse('Your notes...'))
   const Lnote = loadNotes()
   Lnote.forEach((note) => console.log(chalk.white(note.title)))
}

const readNote = (title) => {
   const RDnote = loadNotes()
   const findNote = RDnote.find((e) => e.title === title)
   if(findNote)    console.log(chalk.cyan.inverse(findNote.title) + "    " + findNote.body)
   else console.log(chalk.red.inverse("Sorry! Note not found"))
} 

module.exports = {
   addNote: addNote,
   removeNotes: removeNotes,
   listNotes: listNotes,
   readNote: readNote
}