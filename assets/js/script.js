$(document).ready(function () {
    let todayDate = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.querySelector("#currentDay");
    displayDate.innerHTML = todayDate;
    let currentHour = moment().format("HH");

    $(".hour-div").each(function () {
        var hourDiv = $(this).attr("id").split("-")[1];
        if (currentHour === hourDiv) {
            $(this).addClass("present");
            $(this).children(".description");
        }
        else if (currentHour < hourDiv) {
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        else if (currentHour > hourDiv) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });
});