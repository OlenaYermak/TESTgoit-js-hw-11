import{S as c,i}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const l="42504906-5b025263817bd530cbe95d02a",d=async s=>{const o=`https://pixabay.com/api/?key=${l}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await(await fetch(o)).json();if(t.hits.length===0)throw new Error("No images found.");return t.hits}catch{throw new Error("Error fetching images.")}},u=s=>{const o=document.querySelector(".image-container");o.innerHTML="",s.forEach(t=>{const e=document.createElement("div");e.classList.add("image-card");const r=t.webformatURL,n=t.tags;e.innerHTML=`
      <a href="${t.largeImageURL}" data-lightbox="gallery" data-title="${n}">
        <img src="${r}" alt="${n}" loading="lazy">
      </a>
    `,o.appendChild(e)}),new c(".image-card a").refresh()},f=document.querySelector(".form-search");f.addEventListener("submit",async s=>{s.preventDefault();const a=document.querySelector(".form-input").value.trim();if(!a){i.error({title:"Error",message:"Please enter a search query."});return}try{const t=await d(a);u(t)}catch{i.error({title:"Error",message:"No images found. Please try again."})}finally{}});
//# sourceMappingURL=commonHelpers.js.map