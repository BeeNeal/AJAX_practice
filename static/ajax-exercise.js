"use strict";



// PART 1: SHOW A FORTUNE

// function showFortune(results) {
//     let fortune = results;
//     $('#fortune-text').html(fortune);
// }

// function getFortune(evt) {

//     // TODO: get the fortune and show it in the #fortune-text div
//     // evt.preventDefault();

//     // $.get('/fortune', showFortune);
//     $.get('/fortune', function (results) {
//         let fortune = results;
//         $('#fortune-text').html(fortune);
//     });
// }

// $('#get-fortune-button').on('click', getFortune);
$('#get-fortune-button').on('click', function (evt) {
        $.get('/fortune', function (results) {
            let fortune = results;
            $('#fortune-text').html(fortune);
    });
});


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();


    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, function (weather_results) {
        $('#weather-info').html(weather_results.forecast);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


