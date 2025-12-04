import{S as v,a as b,i as n}from"./assets/vendor-DjNg1bp9.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const s={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadContainer:document.querySelector(".load-container"),button:document.querySelector("button"),loadMoreBtn:document.querySelector(".js-more-button")},w=new v(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(r,i=!1){const t=r.map(o=>`<li class="gallery-item">
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
    </li>`).join("");i?s.gallery.insertAdjacentHTML("beforeend",t):s.gallery.innerHTML=t,w.refresh()}function L(){s.gallery.innerHTML=""}function h(){s.loader.classList.remove("hidden")}function m(){s.loader.classList.add("hidden")}function S(){s.loadMoreBtn.classList.remove("hidden")}function u(){s.loadMoreBtn.classList.add("hidden")}async function p(r,i){try{return(await b.get("https://pixabay.com/api/",{params:{key:"53354647-5c23245d0a5319fc788c83675",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}})).data}catch(t){console.log(t)}}const P=15;let l,c=1,f;s.form.addEventListener("submit",async r=>{if(r.preventDefault(),s.input.blur(),c=1,l=new FormData(r.target).get("search-text").trim(),!l){n.show({message:"Type something to begin your search.",color:"#EF4040",messageColor:"white",position:"topRight",messageSize:"20",timeout:"2000",theme:"dark"});return}h(),L(),u();try{const t=await p(l,c);if(!t.hits||t.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}),m();return}g(t.hits),f=Math.ceil(t.totalHits/P),y()}catch{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}m(),s.form.reset()});s.loadMoreBtn.addEventListener("click",async()=>{h(),u(),c+=1;try{const r=await p(l,c);(!r.hits||r.hits.length===0)&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}),y(),g(r.hits,!0);const o=s.gallery.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})}catch{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}m(),s.form.reset()});function y(){c<f?S():(u(),n.show({message:"We're sorry, but you've reached the end of search results.",iconUrl:"./img/bi_x-octagon.svg",color:"blue",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}))}
//# sourceMappingURL=index.js.map
