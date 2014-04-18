'use strict'
// declare variables

var daysLoadScroll = 7;
var daysLoadInitial = 6;

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
    // console.log('createDayContainer:', dayToCreate);
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

    // create todays dom element
    createDayContainer(getDateObject(new Date()));

    // create 6 more days from last day element
    getDatesArray(daysLoadInitial, 'day-container').map(createDayContainer);


    //create event handlers
    $(document).on('click', '.editable', function() {
        inputSwitch(this);
    });

    $(document).on('scroll', function() {
        // track the bottom .75 of the window
        // if it passes the bottom .85 of document,
        // make one more week of days
        var win = $(window);
        var posWinBottom75 = ((win.height() * .98) + win.scrollTop()) / $(this).height();
        console.log(posWinBottom75);
        if (posWinBottom75 >= .97) {
            console.log('make new ones!!');
            getDatesArray(daysLoadScroll, 'day-container').map(createDayContainer);
        }

    })

});