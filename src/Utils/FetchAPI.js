import axios from 'axios'; 

export const BaseURL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BaseURL,
    params: {
      maxResults: 24,
    },
    headers: {
      'X-RapidAPI-Key': '7e43ca1b31msh6f0e4834c7950c0p191b36jsn086f59186680',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };

export const FetchAPI = async (url) => {
    const { data } = await axios.get(`${BaseURL}/${url}`, options);
    return data;
}