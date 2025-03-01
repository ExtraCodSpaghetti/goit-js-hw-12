import{a as v,S as f,i as a}from"./assets/vendor-vrAi6ITW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const w="49114219-148fd2eac33b6a5671d248709",y=(r,t)=>{const i={params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t}};return v.get("https://pixabay.com/api/",i)},g=r=>r.map(({webformatURL:t,largeImageURL:i,tags:c,likes:e,views:s,comments:l,downloads:b})=>`
    <a href="${i}" class="gallery-item">
  <div class="photo-card">
  <img src="${t}" alt="${c}" class="gallery-image" loading="lazy" width="360" />
  <div>
    <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${e}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${s}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${l}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${b}</p>
                    </li>
                </ul>
  </div>
  </div>
  </a>`).join(""),L=document.querySelector(".form-search"),h=document.querySelector(".gallery"),n=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");let u=1,d="",m;n.style.display="none";o.classList.add("is-hidden");new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const k=async r=>{if(r.preventDefault(),h.innerHTML="",d=r.currentTarget.elements.user_query.value.trim(),u=1,o.classList.add("is-hidden"),n.style.display="block",d===""){a.warning({title:"Warning",position:"topRight",message:"Please enter a search query!"}),n.style.display="none";return}try{const{data:t}=await y(d,u);if(!t.hits.length){a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const i=g(t.hits);if(h.insertAdjacentHTML("beforeend",i),m=new f(".gallery-item",{captions:!0,captionsData:"alt",captionDelay:250}),m.refresh(),L.reset(),n.style.display="none",t.hits.length<40){a.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}o.classList.remove("is-hidden"),o.addEventListener("click",p)}catch(t){console.log(t)}finally{n.style.display="none"}};L.addEventListener("submit",k);const p=async()=>{n.style.display="block",u++;try{const{data:r}=await y(d,u);if(n.style.display="none",!r.hits.length){a.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),o.classList.add("is-hidden"),o.removeEventListener("click",p);return}const t=g(r.hits);h.insertAdjacentHTML("beforeend",t),q(),m.refresh(),r.hits.length<40&&(a.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),o.classList.add("is-hidden"),o.removeEventListener("click",p))}catch{a.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."})}},q=()=>{const{height:r}=h.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
