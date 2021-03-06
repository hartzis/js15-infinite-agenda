'use strict'

// date parsing functions

// return date object
var getDateObject = function(thisDate) {
    var dateString = thisDate.toDateString();
    // console.log('getDateObject', dateString);
    var dateSplit = dateString.split(' ');
    var dateObject = {
        weekday: dateSplit[0],
        month: dateSplit[1],
        day: dateSplit[2],
        year: dateSplit[3]
    };
    // console.log('getDateObject - object:', dateObject);
    return dateObject;
};

var getNextDate = function(inDate) {
    var tempDate = new Date();
    return tempDate.setDate(inDate.getDate() + 1)
}

// return request dates in array
var getDatesArray = function(totalDates, dayContainerClass) {
    var lastDate = getLastDate(dayContainerClass);
    // var trackDay = new Date();
    var datesArray = [];
    for (var i = 1; i <= totalDates; i++) {
        lastDate.setDate(lastDate.getDate() + 1);
        console.log('trackDay:', lastDate);
        // console.log('call getDateObject:', getDateObject(trackDay));
        datesArray.push(getDateObject(lastDate));
    };

    console.log(datesArray);
    return datesArray;

};

var getEditableDate = function(dayContainer) {

    var dateDay = $(dayContainer).find('.day-date').text()
    var dateWeekDay = $(dayContainer).find('.day-of-week').text()
    var dateMonth = $(dayContainer).find('.day-month').text()
    var dateYear = $(dayContainer).find('.day-year').text()

    var editableDate = dateWeekDay + '-' + dateMonth + '-' + dateDay + '-' + dateYear;

    return editableDate;
}

// get the last day in DOM using the day container
var getLastDate = function(dayContainerClass) {
    var selector = '.' + dayContainerClass + ':last'
    var dateDay = $(selector).find('.day-date').text()
    var dateWeekDay = $(selector).find('.day-of-week').text()
    var dateMonth = $(selector).find('.day-month').text()
    var dateYear = $(selector).find('.day-year').text()

    var lastDate = dateWeekDay + ' ' + dateMonth + ' ' + dateDay + ' ' + dateYear

    var newDate = new Date(lastDate);
    console.log('getLastDate:', newDate);
    return newDate;
};