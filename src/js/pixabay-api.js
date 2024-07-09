import axios from 'axios';

export async function fetchPhotos(query, currentPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '44728966-7765244b057c0982fa05c31d9',
    q: query,
    per_page: 15,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}