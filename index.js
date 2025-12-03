import{S as f,a as y,i as n}from"./assets/vendor-DjNg1bp9.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const e={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loader2:document.querySelector(".js-loader2"),loadContainer:document.querySelector(".load-container"),button:document.querySelector("button"),loadMoreBtn:document.querySelector(".js-more-button"),endResults:document.querySelector(".js-end-result")},v=new f(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function m(r,i=!1){const s=r.map(o=>`<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a class="preview" href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${o.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${o.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${o.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${o.downloads}</span>
        </div>
    </div>
    </div>
    </li>`).join("");i?e.gallery.insertAdjacentHTML("beforeend",s):e.gallery.innerHTML=s,v.refresh()}function w(){e.gallery.innerHTML=""}function L(){e.loader.classList.remove("hidden")}function b(){e.loader.classList.add("hidden")}function S(){e.loader2.classList.remove("hidden")}function q(){e.loader2.classList.add("hidden")}function P(){e.loadMoreBtn.classList.remove("hidden")}function u(){e.loadMoreBtn.classList.add("hidden")}async function g(r,i){try{return(await y.get("https://pixabay.com/api/",{params:{key:"53354647-5c23245d0a5319fc788c83675",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}catch(s){console.log(s)}}const M=15;let c,l=1,h;e.form.addEventListener("submit",async r=>{if(r.preventDefault(),e.input.blur(),l=1,c=new FormData(r.target).get("search-text").trim(),!c){n.show({message:"Type something to begin your search.",color:"#EF4040",messageColor:"white",position:"topRight",messageSize:"20",timeout:"2000",theme:"dark"});return}L(),w(),u();try{const s=await g(c,l);if(!s.hits||s.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"});return}m(s.hits),h=Math.ceil(s.totalHits/M),p()}catch{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}b(),e.form.reset()});e.loadMoreBtn.addEventListener("click",async()=>{S(),u(),l+=1;try{const r=await g(c,l);(!r.hits||r.hits.length===0)&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}),p(),m(r.hits,!0);const o=e.gallery.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})}catch{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}q(),e.form.reset()});function p(){l<h?P():(u(),e.endResults.textContent="We're sorry, but you've reached the end of search results.")}
//# sourceMappingURL=index.js.map
