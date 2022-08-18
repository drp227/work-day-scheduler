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
    
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });

    $("#hour-09 .description").val(localStorage.getItem("09"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));
});