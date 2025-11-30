import{S as y,a as v,i as n}from"./assets/vendor-DjNg1bp9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const e={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loader2:document.querySelector(".js-loader2"),loadContainer:document.querySelector(".load-container"),button:document.querySelector("button"),loadMoreBtn:document.querySelector(".js-more-button"),endResults:document.querySelector(".js-end-result")},w=new y(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(t,r=!1){const s=t.map(i=>`<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a class="preview" href="${i.largeImageURL}"><img src="${i.webformatURL}" alt="${i.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${i.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${i.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${i.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${i.downloads}</span>
        </div>
    </div>
    </div>
    </li>`).join("");r?e.gallery.insertAdjacentHTML("beforeend",s):e.gallery.innerHTML=s,w.refresh()}function L(){e.gallery.innerHTML=""}function b(){e.loader.classList.remove("hidden")}function S(){e.loader.classList.add("hidden")}function q(){e.loader2.classList.remove("hidden")}function P(){e.loader2.classList.add("hidden")}function x(){e.loadMoreBtn.classList.remove("hidden")}function g(){e.loadMoreBtn.classList.add("hidden")}async function p(t,r){try{const s=await v.get("https://pixabay.com/api/",{params:{key:"53354647-5c23245d0a5319fc788c83675",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return console.log(s.data),s.data}catch(s){console.log(s)}}const E=15;let c,l=1,m;e.form.addEventListener("submit",async t=>{if(t.preventDefault(),e.input.blur(),l=1,c=new FormData(t.target).get("search-text").trim(),!c){n.show({message:"Type something to begin your search.",color:"#EF4040",messageColor:"white",position:"topRight",messageSize:"20",timeout:"2000",theme:"dark"});return}b(),L(),g();try{const s=await p(c,l);if(!s.hits||s.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"});return}h(s.hits),m=Math.ceil(s.totalHits/E),console.log(m),f()}catch{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}S(),e.form.reset()});e.loadMoreBtn.addEventListener("click",async()=>{q(),g(),l+=1;try{const t=await p(c,l);(!t.hits||t.hits.length===0)&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}),f(),h(t.hits,!0),scrollNewItems(e.gallery,2)}catch{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}P(),e.form.reset()});function f(){l<m?x():(g(),e.endResults.textContent="We're sorry, but you've reached the end of search results.")}let M=e.gallery.firstElementChild,u=M.getBoundingClientRect();for(const t in u)if(typeof u[t]!="function"){let r=document.createElement("p");r.textContent=`${t} : ${u[t]}`,document.body.appendChild(r),console.log(r)}window.scrollBy({top:100,left:100,behavior:"smooth"});
//# sourceMappingURL=index.js.map
