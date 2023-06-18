$(function () {
$("#navigate-button").click(function () {
    window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
})
})