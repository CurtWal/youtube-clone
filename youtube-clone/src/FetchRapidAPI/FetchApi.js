import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete/';

const options = {
  url: BASE_URL,
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.React_App_RapidAPI_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

  export const FetchApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }