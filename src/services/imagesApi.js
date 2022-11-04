import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30384018-2d39d03273dba06700386baf1';

export const getImages = async(searchWord, page) => {
  const response = await axios.get(`/?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`);
  return response.data.hits;
}