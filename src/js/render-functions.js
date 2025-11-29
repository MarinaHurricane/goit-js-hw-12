  import { refs } from './refs.js'
  import SimpleLightbox from "simplelightbox";
  import "simplelightbox/dist/simple-lightbox.min.css";
  
  export const lightbox = new SimpleLightbox(".js-gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom"
  });

  export function createGallery(images) {
    refs.gallery.innerHTML = images.map(image => (
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

