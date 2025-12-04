import { refs } from './js/refs';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const PER_PAGE = 15;
let query;
let currentPage = 1;
let totalPages;

refs.form.addEventListener('submit', async e => {
    e.preventDefault();

    refs.input.blur();
    currentPage = 1;
    const formData = new FormData(e.target);
    query = formData.get('search-text').trim();

    if(!query) {
      iziToast.show({
        message: `Type something to begin your search.`,
        color: 'red',
        messageColor: 'white',
        position: 'topRight',
        messageSize: '20',
        timeout: '2000',
        theme: 'dark',
      }); return;
    } ;
    showLoader();
    clearGallery();
    hideLoadMoreButton();

    try{
      const result = await getImagesByQuery(query, currentPage);
      if(!result.hits || result.hits.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          color: 'red',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        }); 
        hideLoader();
        refs.form.reset();
        return;
      }
      createGallery(result.hits);
      totalPages = Math.ceil(result.totalHits / PER_PAGE);
      handleLoadMoreBtn();
  
    } catch {
      iziToast.show({
          message: `Something went wrong. Please try again later.`,
          color: 'red',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        });
    };

    hideLoader();
    refs.form.reset();
  });


  refs.loadMoreBtn.addEventListener('click', async () => {
    showLoader();
    hideLoadMoreButton();
    currentPage += 1;
  
    try{
      const result = await getImagesByQuery(query, currentPage);
      if(!result.hits || result.hits.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          color: 'red',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        }); 
        refs.form.reset();
        return;
      }
      handleLoadMoreBtn();
      createGallery(result.hits, true);
          
      if (refs.gallery.firstElementChild) {
        const rect = refs.gallery.firstElementChild.getBoundingClientRect();
        const heightToScroll = rect.height * 2;
        window.scrollBy({ 
           top: heightToScroll,
           behavior: "smooth" });
        };
      
    } catch {
      iziToast.show({
          message: `Something went wrong. Please try again later.`,
          color: 'red',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        });
    };
    hideLoader();
    refs.form.reset();
  });


  function handleLoadMoreBtn() {
    if(currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        color: 'blue',
        position: 'topRight',
        messageSize: '20',
        timeout: '4000',
        theme: 'dark',
      });
    };
  };










