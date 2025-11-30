import{S as l,a as d,i as n}from"./assets/vendor-rCqJG_pJ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const r={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),button:document.querySelector("button")},u=new l(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function m(o){r.gallery.innerHTML=o.map(e=>`<li class="gallery-item">
      <div class="gallery-container">
      <div class="gallery">
        <a class="preview" href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" title=""/></a>
    </div>

    <div class="description">
          <div class="sub-descr">
          <span class="img-descr-title">Likes</span>
          <span class="img-descr">${e.likes}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Views</span>
          <span class="img-descr">${e.views}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Comments</span>
          <span class="img-descr">${e.comments}</span>
        </div>
        <div class="sub-descr">
          <span class="img-descr-title">Downloads</span>
          <span class="img-descr">${e.downloads}</span>
        </div>
    </div>
    </div>
    </li>`).join(""),u.refresh()}function p(){r.gallery.innerHTML=""}function g(){r.loader.classList.remove("hidden")}function f(){r.loader.classList.add("hidden")}function h(o){return d.get("https://pixabay.com/api/",{params:{key:"53354647-5c23245d0a5319fc788c83675",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>console.log(e))}r.form.addEventListener("submit",o=>{o.preventDefault(),r.input.blur();const e=r.input.value.trim();if(!e){n.show({message:"Type something to begin your search.",color:"#EF4040",messageColor:"white",position:"topRight",messageSize:"20",timeout:"2000",theme:"dark"});return}p(),g(),h(e).then(i=>{(!i||i.length===0)&&n.show({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"}),m(i)}).catch(i=>{n.show({message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg",color:"#EF4040",position:"topRight",messageSize:"20",timeout:"4000",theme:"dark"})}).finally(()=>{f()}),r.form.reset()});
//# sourceMappingURL=index.js.map
