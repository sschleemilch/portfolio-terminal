import axios from 'axios';
import config from '../config.json'

export const getQuote = async () => {
    const { data } = await axios.get('https://api.quotable.io/random');
  
    return {
      quote: `“${data.content}” — ${data.author}`,
    };
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.aboutURL);

  return data;
};