$(document).ready(function () {
    var quotes = JSON.parse($('#quotes_json').html());
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("#phrase").text(randomQuote['phrase']);
    if ('signature' in randomQuote) {
        $("#signature").text(randomQuote['signature']);
    }
});