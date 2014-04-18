'use strict'
// declare variables

var initialLoadTotal = 10;
// var testDay = {
//     date: '17',
//     day: 'Thursday',
//     month: 'April'
// };
var testDay = ['17', 'Thursday', 'April'];

// rendering functions

var createDayTitle = function(dayToCreate) {
    console.log('createDayTitle:', dayToCreate);
    var toSetDay = dayToCreate[0];
    console.log('createDayTitle:', toSetDay);
    var dayDate = $('<div class="day-date day">').text(toSetDay);
    var dayDay = $('<div class="day-of-week day">').text(dayToCreate[1]);
    var dayMonth = $('<div class="day-title day">').text(dayToCreate[2]);
    var dayHeader = $('<div class="day-header">');

    var dayDateContainer = $('<div class="day-date-container day-title-brdr">');

    dayDateContainer.append(dayDate, dayDay, dayMonth);

    return dayDateContainer;

}

var createDayNote = function() {
    var dayNote = $('<div class="day-not editable>')
        .text('Enter Day Events Here');
    return dayNote;

}

var createDayContainer = function(dayToCreate) {
    var newDayToCreate = dayToCreate.slice(0)
    console.log('createDayContainer:', newDayToCreate);
    ('.calendar-container').append(createDayTitle(newDayToCreate), createDayTitle());

}


//switch back to base text and copy new input val to it
var inputReSwitch = function(element) {
    $(element).parent().children('.editable').text($(element).val());
    $(element).parent().children('.editable').show();
    $(element).remove();
}

//initial switch to input, create it and populate with base text
var inputSwitch = function(element) {

    var $inputTxt = $('<textarea>', {
        'class': 'note-textarea',
    })
    $inputTxt.val($(element).text());
    $(element).parent().append(($inputTxt));
    $(element).hide();
    $inputTxt.focus();
    $('.note-textarea').blur(function() {
        inputReSwitch(this);
    });
}

$(document).on('ready', function() {

    //create dom objects
    // for (var i = 0; i <= initialLoadTotal; i++) {

    // };

    createDayContainer(testDay);

    //create event handlers
    $('.editable').on('click', function() {
        inputSwitch(this);
    });



});