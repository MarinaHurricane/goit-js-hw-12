  import { refs } from './refs.js'
  import SimpleLightbox from "simplelightbox";
  import "simplelightbox/dist/simple-lightbox.min.css";
  
  export const lightbox = new SimpleLightbox(".js-gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom"
  });

  export function createGallery(images, append = false) {
    const markup = images.map(image => (
      `<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a class="preview" href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${image.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${image.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${image.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${image.downloads}</span>
        </div>
    </div>
    </div>
    </li>`

    )).join('');

    if (append) {
      refs.gallery.insertAdjacentHTML("beforeend", markup);
    } else {
      refs.gallery.innerHTML = markup;
    };
    lightbox.refresh();
  };


  export function clearGallery() {
    refs.gallery.innerHTML = '';
  };

  export function showLoader() {
    refs.loader.classList.remove('hidden');
  };

  export function hideLoader() {
    refs.loader.classList.add('hidden');
  };

  export function showLoader2() {
    refs.loader2.classList.remove('hidden');
  };

  export function hideLoader2() {
    refs.loader2.classList.add('hidden');
  };

  export function showLoadMoreButton() {
    refs.loadMoreBtn.classList.remove('hidden');
  };

  export function hideLoadMoreButton() {
    refs.loadMoreBtn.classList.add('hidden');
  };




