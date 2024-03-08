import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
    url: BASE_URL,
    params: {
      q: 'music',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': process.env.React_App_RapidAPI_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }