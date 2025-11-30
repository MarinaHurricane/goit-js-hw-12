import { refs } from './js/refs';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { showLoader2 } from './js/render-functions';
import { hideLoader2 } from './js/render-functions';
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
        color: '#EF4040',
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
          iconUrl: './img/bi_x-octagon.svg',
          color: '#EF4040',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        }); return;
      }
      createGallery(result.hits);
      totalPages = Math.ceil(result.totalHits / PER_PAGE);
      console.log(totalPages);
      // console.log(markup);
      handleLoadMoreBtn();
  
    } catch {
      iziToast.show({
          message: `Something went wrong. Please try again later.`,
          iconUrl: './img/bi_x-octagon.svg',
          color: '#EF4040',
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
    showLoader2();
    hideLoadMoreButton();
    currentPage += 1;
  
    try{
      const result = await getImagesByQuery(query, currentPage);
      if(!result.hits || result.hits.length === 0) {
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
      handleLoadMoreBtn();
      createGallery(result.hits, true);
      scrollNewItems(refs.gallery, 2);
    } catch {
      iziToast.show({
          message: `Something went wrong. Please try again later.`,
          iconUrl: './img/bi_x-octagon.svg',
          color: '#EF4040',
          position: 'topRight',
          messageSize: '20',
          timeout: '4000',
          theme: 'dark',
        });
    };
    hideLoader2();
    refs.form.reset();
  });


  function handleLoadMoreBtn() {
    if(currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      refs.endResults.textContent = `We're sorry, but you've reached the end of search results.`
    };
  };


// // Get the first <li> element
// const galleryItem = refs.gallery.firstElementChild;

// if (galleryItem) {
//   // Measure height
//   const height = galleryItem.getBoundingClientRect().height;

//   // Get container gap (optional)
//   const gap = parseInt(getComputedStyle(refs.gallery).gap) || 0;

//   // Scroll down by 2 items
//   window.scrollBy({
//     top: (height + gap) * 2,
//     left: 0,
//     behavior: 'smooth'
//   });
// }


// function scrollNewItems(gallery, count) {
//   if (!gallery) return;

//   // All <li> elements in the gallery
//   const allItems = gallery.querySelectorAll('li');
//   const totalItems = allItems.length;
//   if (totalItems === 0) return;

//   // First of the newly added items (assume last 'count' items are new)
//   const firstNewIndex = Math.max(totalItems - count, 0);
//   const galleryItem = allItems[firstNewIndex];
//   if (!galleryItem) return;

//   // Measure height of the element
//   const rect = galleryItem.getBoundingClientRect();

//   // Get vertical gap from the gallery container
//   const gap = parseInt(getComputedStyle(gallery).gap) || 0;

//   // Scroll down by the height of 'count' items
//   window.scrollBy({
//     top: (rect.height + gap) * count,
//     left: 0,
//     behavior: 'smooth'
//   });
// }


let elem = refs.gallery.firstElementChild;
let rect = elem.getBoundingClientRect();
for (const key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
    console.log(para);
  }
}

window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});







