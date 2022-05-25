$(document).ready(function() {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Gwangmyeong&appid=fbf5aef8f62e9fd97ed51fc10a340990&units=metric',
        dataType: 'json',
        type: 'GET', 
        success: function(data) {
            let $Icon = (data.weather[0].icon);
            let $Temp = Math.floor(data.main.temp) + '°';

            $('.CurrIcon').append('http://openweathermap.org/omg/wn/'+$Icon );
            $('.CurrTemp').prepend($Temp);
            $('.City').append($city);
        }
    })
});