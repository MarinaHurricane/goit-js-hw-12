import { refs } from './js/refs';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    refs.input.blur();

    const query = refs.input.value.trim();
    if(!query) {
      iziToast.show({
        message: `Type something to begin your search.`,
        color: '#EF4040',
        messageColor: 'white',
        position: 'topRight',
        messageSize: '20',
        timeout: '2000',
        theme: 'dark',
      }); return;
    } ;
    clearGallery();
    showLoader();

    getImagesByQuery(query)
    .then(images => {
        if(!images || images.length === 0) {
          iziToast.show({
            message: `Sorry, there are no images matching your search query. Please try again!`,
            iconUrl: './img/bi_x-octagon.svg',
            color: '#EF4040',
            position: 'topRight',
            messageSize: '20',
            timeout: '4000',
            theme: 'dark',
          });
        }
        createGallery(images, refs.gallery);
    })
    .catch(err => {
        iziToast.show({
          message: `Something went wrong. Please try again later.`,
          iconUrl: './img/bi_x-octagon.svg',
          color: '#EF4040',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        });
    }).finally(() => {
      hideLoader();
    })

    refs.form.reset();
  });

