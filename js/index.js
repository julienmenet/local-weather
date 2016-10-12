// JavaScript Document
// USING WUNDERGROUNG API !
$(document).ready(function () {
    $.ajax({
        url: "http://api.wunderground.com/api/11c142d363c23ce7/geolookup/conditions/q/autoip.json",
        dataType: "jsonp",
        success: function (response) {
            //variables
            var observe = response['current_observation'];
            var city = response.location.city;
            var country = response.location.country_name;
            var degFah = observe.temp_f;
            var degCel = observe.temp_c;
            var weather = observe.weather;
            //weather types
            console.log(weather);
            switch (weather) {
                case 'Light Drizzle':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Drizzle':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Drizzle':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Light Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Snow Grains':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Snow Grains':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Snow Grains':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Ice Crystals':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Ice Crystals':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Ice Crystals':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Ice Pellets':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Ice Pellets':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Ice Pellets':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Light Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Heavy Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Hail Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Light Hail Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Heavy Hail Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Small Hail Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Light Small Hail Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Heavy Small Hail Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Small Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/hail.gif');
                    break;
                case 'Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Light Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Heavy Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Light Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Heavy Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Fog Patches':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Light Fog Patches':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Heavy Fog Patches':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Low Drifting Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Low Drifting Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Low Drifting Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Low Drifting Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Low Drifting Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Low Drifting Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Blowing Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Blowing Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Blowing Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Snow Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Snow Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Snow Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Snow Blowing Snow Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Snow Blowing Snow Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Snow Blowing Snow Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Ice Pellet Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Light Ice Pellet Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Heavy Ice Pellet Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/snow.gif');
                    break;
                case 'Rain Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Light Rain Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Rain Mist':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Rain Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Light Rain Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Rain Showers':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Thunderstorm':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Light Thunderstorm':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Heavy Thunderstorm':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Thunderstorms and Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Light Thunderstorms and Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Heavy Thunderstorms and Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Thunderstorms and Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Light Thunderstorms and Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Heavy Thunderstorms and Snow':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Thunderstorms and Ice Pellets':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Light Thunderstorms and Ice Pellets':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Heavy Thunderstorms and Ice Pellets':
                    $('#weather-icon img').attr('src', 'hhttp://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Thunderstorms with Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Light Thunderstorms with Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Heavy Thunderstorms with Hail':
                    $('#weather-icon img').attr('src', 'hhttp://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Thunderstorms with Small Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Light Thunderstorms with Small Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Heavy Thunderstorms with Small Hail':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/tstorms.gif');
                    break;
                case 'Freezing Drizzle':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Light Freezing Drizzle':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Freezing Drizzle':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Freezing Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Light Freezing Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;
                case 'Heavy Freezing Rain':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/rain.gif');
                    break;

                case 'Freezing Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Light Freezing Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Heavy Freezing Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Patches of Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Shallow Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Partial Fog':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/fog.gif');
                    break;
                case 'Overcast':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/overcast.gif');
                    break;
                case 'Clear':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/clear.gif');
                    break;
                case 'Partly Cloudy':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/partlycloudy.gif');
                    break;
                case 'Mostly Cloudy':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/mostlycloudy.gif');
                    break;
                case 'Scattered Clouds':
                    $('#weather-icon img').attr('src', 'http://icons.wxug.com/i/c/g/partlycloudy.gif');
                    break;
                case 'Unknown Precipitation':
                    $('#weather-icon img').html('unknown Precipitation');
                    break;
                case 'Unknown':
                    $('#weather-icon img').html('unknown Precipitation');
                    break;
            }
            //location
            $('.location .city').html(city);
            $('.location .country').html(country);
            //temperature
            function showData() {
                if ($('.cel-btn').hasClass('active')) {
                    $('.tmp-text').html(degCel);
                }
                if ($('.fah-btn').hasClass('active')) {
                    $('.tmp-text').html(degFah);
                }
            }
            showData();
            $('.cel-btn').click(function () {
                $('.cel-btn').addClass('active');
                $('.fah-btn').removeClass('active');
                $('.scale').html('&#8451;');
                showData();
            });
            $('.fah-btn').click(function () {
                $('.fah-btn').addClass('active');
                $('.cel-btn').removeClass('active');
                $('.scale').html('&#8457;');
                showData();
            });
        }
    });
});