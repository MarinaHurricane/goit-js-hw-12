import{S as w,a as v,i as n}from"./assets/vendor-DjNg1bp9.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const e={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadContainer:document.querySelector(".load-container"),button:document.querySelector("button"),loadMoreBtn:document.querySelector(".js-more-button")},b=new w(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(r,i=!1){const s=r.map(a=>`<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a class="preview" href="${a.largeImageURL}"><img src="${a.webformatURL}" alt="${a.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${a.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${a.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${a.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${a.downloads}</span>
        </div>
    </div>
    </div>
    </li>`).join("");i?e.gallery.insertAdjacentHTML("beforeend",s):e.gallery.innerHTML=s,b.refresh()}function L(){e.gallery.innerHTML=""}function h(){e.loader.classList.remove("hidden")}function u(){e.loader.classList.add("hidden")}function S(){e.loadMoreBtn.classList.remove("hidden")}function m(){e.loadMoreBtn.classList.add("hidden")}async function p(r,i){try{return(await v.get("https://pixabay.com/api/",{params:{key:"53354647-5c23245d0a5319fc788c83675",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}catch(s){console.log(s)}}const P=15;let c,l=1,f;e.form.addEventListener("submit",async r=>{if(r.preventDefault(),e.input.blur(),l=1,c=new FormData(r.target).get("search-text").trim(),!c){n.show({message:"Type something to begin your search.",color:"#EF4040",messageColor:"white",position:"topRight",messageSize:"20",timeout:"2000",theme:"dark"});return}h(),L(),m();try{const s=await p(c,l);if(!s.hits||s.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark",class:"custom-toast"}),u(),e.form.reset();return}g(s.hits),f=Math.ceil(s.totalHits/P),y()}catch{n.show({message:"Something went wrong. Please try again later.",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}u(),e.form.reset()});e.loadMoreBtn.addEventListener("click",async()=>{h(),m(),l+=1;try{const r=await p(c,l);if(!r.hits||r.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}),e.form.reset();return}if(y(),g(r.hits,!0),e.gallery.firstElementChild){const s=e.gallery.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}}catch{n.show({message:"Something went wrong. Please try again later.",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}u(),e.form.reset()});function y(){l<f?S():(m(),n.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#3b82f6",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}))}
//# sourceMappingURL=index.js.map
