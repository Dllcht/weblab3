const getWeather = async (cityName) => {
  let APIkey = 'a42181fd76a4a3f10af0ffd093e42883';
  let result = {
    weather: null,
    error: null
  };

  result.weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${APIkey}&q=${cityName}`).then(res => res.json());
  if (result.weather.cod !== 200)
    result.error = true;
  return result;
};
export default getWeather;