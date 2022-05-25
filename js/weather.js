$(document).ready(function() {
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Kwangmyŏng&appid=fbf5aef8f62e9fd97ed51fc10a340990&units=metric',
        dataType: 'json',
        type: 'GET', 
        success: function(data) {
            var $Icon = (data.weather[0].icon);
            var $Temp = Math.floor(data.main.temp) + '°';
            var $city = data.name;

            $('.CurrIcon').append('<i class="' + wearherIcon[$Icon]+'"></i>');
            $('.CurrTemp').prepend($Temp);
            $('.City').append($city);
        }
    })
});