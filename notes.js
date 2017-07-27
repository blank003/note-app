//console.log('Starting notes.js');
const fs =require('fs');
var fetchNotes=()=>{
try{
var noteString=fs.readFileSync('node-data.json');
 return JSON.parse(noteString);
}catch(e){
return [];
}
};
var saveNote=(notes)=>{
fs.writeFileSync('node-data.json',JSON.stringify(notes));
};
var addNote=(title,body)=>{
var notes=fetchNotes();
var note={
	title,
	body
};
var duplicateNotes= notes.filter((note)=>note.title===title);
if(duplicateNotes.length===0){
	notes.push(note);
	saveNote(notes);
	return note;
}
};
var getAll=() =>{
console.log('Getting all notes');
return fetchNotes();
};
var getNote=(title)=> {
	var notes=fetchNotes();
	var filteredNotes=notes.filter((note) => note.title===title);
	return filteredNotes[0];
};
var remNote=(title)=>{
	var notes=fetchNotes();
	var filteredNotes=notes.filter((note) => note.title!==title);
	saveNote(filteredNotes);
	return notes.length!==filteredNotes.length;
};
var logNote=(note)=>{
	console.log('--');
console.log('Title :' +note.title);
console.log('Body : ' +note.body);
}
module.exports={
addNote,
getAll,
getNote,
remNote,
logNote
};