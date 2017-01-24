$(document).ready(function () {
    $.getJSON('static/js/quotes.json', function (data) {
        var randomQuote = data[Math.floor(Math.random() * data.length)];
        $("p.phrase").text(randomQuote['phrase']);
        if ('signature' in randomQuote) {
            $("p.signature").text(randomQuote['signature']);
        }
    });
});