import Axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': '35686022b2msh7e2edb4765c6ef2p15d895jsnfc9092aa3a0d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const FetchFromAPI = async(url) => {
const {data} = await Axios.get(`${BASE_URL}/${url}`, options)

return data;
}