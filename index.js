import{a as v,S as f,i as m}from"./assets/vendor-vrAi6ITW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const w="49114219-148fd2eac33b6a5671d248709",h=(o,e)=>{const s={params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return v.get("https://pixabay.com/api/",s)},y=o=>o.map(({webformatURL:e,largeImageURL:s,tags:c,likes:t,views:r,comments:a,downloads:b})=>`
    <a href="${s}" class="gallery-item">
  <div class="photo-card">
  <img src="${e}" alt="${c}" class="gallery-image" loading="lazy" width="360" />
  <div>
    <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${t}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${r}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${a}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${b}</p>
                    </li>
                </ul>
  </div>
  </div>
  </a>`).join(""),g=document.querySelector(".form-search"),p=document.querySelector(".gallery"),i=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let l=1,d="",u;i.style.display="none";new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const q=async o=>{if(o.preventDefault(),p.innerHTML="",d=o.currentTarget.elements.user_query.value.trim(),l=1,n.classList.add("is-hidden"),i.style.display="block",d===""){m.warning({title:"Warning",position:"topRight",message:"Please enter a search query!"}),i.style.display="none";return}try{const{data:e}=await h(d,l);if(!e.hits.length){m.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=y(e.hits);p.insertAdjacentHTML("beforeend",s),u=new f(".gallery-item",{captions:!0,captionsData:"alt",captionDelay:250}),u.refresh(),g.reset(),e.totalHits>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",L))}catch(e){console.log(e)}finally{i.style.display="none"}};g.addEventListener("submit",q);const L=async o=>{i.style.display="block",l++;try{const{data:e}=await h(d,l);i.style.display="none";const s=y(e.hits);p.insertAdjacentHTML("beforeend",s),P(),u.refresh(),l*15>=e.totalHits&&(m.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.classList.add("is-hidden"),n.removeEventListener("click",L))}catch{m.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."})}},P=()=>{const{height:o}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
