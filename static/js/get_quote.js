$(document).ready(function () {
    var quotes = JSON.parse($('#quotes_json').html());
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $("p.phrase").text(randomQuote['phrase']);
    if ('signature' in randomQuote) {
        $("p.signature").text(randomQuote['signature']);
    }
});