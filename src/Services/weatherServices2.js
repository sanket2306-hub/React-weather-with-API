import {
    DateTime
} from "luxon";

const API_KEY = "76ea4620470291d365251fe130cf151c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";



const getWeatherData = async(infoType, searchParams) => {

    const url = new URL(BASE_URL + "/" + infoType);
    url.search = await new URLSearchParams({
        searchParams,
        appid: API_KEY
    });


    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

const formatCurrentWeather = (data) => {
    const {
        coord: {
            lat,
            lon
        },
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity
        },
        name,
        dt,
        sys: {
            country,
            sunrise,
            sunset
        },
        weather,
        wind: {
            speed
        }
    } = data

    const {
        main: deatils,
        icon
    } = weather[0]
    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        weather,
        speed
    };
};

const formatForecastWeather = (data) => {

    let {
        timezone,
        daily,
        hourly
    } = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc '),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });
    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });

    return { timezone, hourly, daily }



};
const getFormattedWeatherData = async(searchParams) => {

    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {
        lat,
        lon
    } = formatCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alters",
        units: searchParams.units,
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather };
}

const formatToLocalTime = (secs, zone, format = "cccc,dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;