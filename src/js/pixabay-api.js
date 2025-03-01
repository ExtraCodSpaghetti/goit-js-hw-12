import axios from 'axios';

const keyAPI = '49114219-148fd2eac33b6a5671d248709';

export const fetchPhotos = (query, currentPage) => {
  const axiosOptions = {
    params: {
      key: keyAPI,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
      page: currentPage,
    },
  };

  return axios.get('https://pixabay.com/api/', axiosOptions);
};
