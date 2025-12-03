import axios from 'axios';

 export async function getImagesByQuery(query, currentPage) {
   try {
    const result = await axios.get('https://pixabay.com/api/', {
    params: {
        key: '53354647-5c23245d0a5319fc788c83675',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: currentPage,
    }
   });
   return result.data;
} catch (error) {
    console.log(error);
};
 }; 




