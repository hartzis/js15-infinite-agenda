'use strict'

// get local day notes if exists
var dayNotes = localStorage['day-notes'] ? JSON.parse(localStorage['day-notes']) : {};

var createSetNoteObj = function(noteDate, noteString) {
    // set note if changing old note

    dayNotes[noteDate] = noteString;
    console.log(dayNotes);

};

var checkForLocalNote = function(noteDate) {

    if (noteDate in dayNotes) {
        console.log('checkForLocalNote: it found it!');
        return dayNotes[noteDate];
    } else {
        return 'Enter Day Events Here';
    }
};

var saveNotesLocal = function() {
    localStorage['day-notes'] = JSON.stringify(dayNotes);
}