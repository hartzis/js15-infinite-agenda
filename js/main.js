'use strict'
// declare variables

var initialLoadDays = 10;


// rendering functions

var createDay = function(dayToCreate) {

    var thisDate = dayToCreate.weekday + '-' + dayToCreate.month + '-' + dayToCreate.day + '-' + dayToCreate.year;

    var dayContainer = $('<div class="day-container">').attr("data-date", thisDate);

    var dayDate = $('<div class="day-date day">').text(dayToCreate.day);
    var dayWeekDay = $('<div class="day-of-week day">').text(dayToCreate.weekday);
    var dayMonth = $('<div class="day-title day-month">').text(dayToCreate.month);
    var dayYear = $('<div class="day-title day-year">').text(dayToCreate.year);
    var dayNote = $('<div class="day-note editable">').text('Enter Day Events Here');


    var dayDateContainer = $('<div class="day-date-container day-title-brdr">');

    dayContainer.append(dayDateContainer.append(dayDate, dayWeekDay, dayMonth, dayYear), dayNote);

    return dayContainer;

}

var createDayContainer = function(dayToCreate) {
    console.log('createDayContainer:', dayToCreate);
    // console.log('pooque');
    $('.calendar-container').append(createDay(dayToCreate));

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

    // create dom elements

    //create todays dom element
    createDayContainer(getDateObject(new Date()));

    //create 10 more days from last day element
    getDatesArray(10, 'day-container').map(createDayContainer);


    //create event handlers
    $('.editable').on('click', function() {
        inputSwitch(this);
    });



});