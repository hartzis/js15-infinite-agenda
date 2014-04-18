'use strict'
// declare variables

var startDate = new Date();

var lastDate = new Date();


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
}

// return request dates in array
var getDatesArray = function(totalDates, dayContainerClass) {
    var lastDate = getLastDate(dayContainerClass);
    var trackDay = new Date();
    var datesArray = [];
    for (var i = 1; i <= totalDates; i++) {
        trackDay.setDate(lastDate.getDate() + i);
        console.log('trackDay:', trackDay);
        console.log('call getDateObject:', getDateObject(trackDay));
        datesArray.push(getDateObject(trackDay));
    };

    // console.log(datesArray);
    return datesArray;

}

// get the last day in DOM using the day container
var getLastDate = function(dayContainerClass) {
    var selector = '.' + dayContainerClass + ':last'
    var dateDay = $(selector).find('.day-date').text()
    var dateWeekDay = $(selector).find('.day-of-week').text()
    var dateMonth = $(selector).find('.day-month').text()
    var dateYear = $(selector).find('.day-year').text()

    var lastDate = dateWeekDay + ' ' + dateMonth + ' ' + dateDay + ' ' + dateYear
    // console.log('getLastDate:', lastDate);
    var newDate = new Date(lastDate);
    return newDate;
}