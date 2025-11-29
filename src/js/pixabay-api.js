import axios from 'axios';

 export function getImagesByQuery(query) {
   return axios.get('https://pixabay.com/api/', {
    params: {
        key: '53354647-5c23245d0a5319fc788c83675',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
    }
   })
   .then(res =>  res.data.hits)
    .catch(err => console.log(err));
};



