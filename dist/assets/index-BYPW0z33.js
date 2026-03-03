(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const P="https://dummyjson.com/";class w{constructor(s,e,n,i,a,r,h,g,m,p,f,y,b,v){this.title=s,this.thumbnail=e,this.description=n,this.brand=i,this.category=a,this.price=r,this.tags=h,this.reviews=g,this.rating=m,this.dimensions=p,this.weight=f,this.availabilityStatus=y,this.returnPolicy=b,this.id=v}}const l=async t=>{const s=await L(`${P}/products?limit=30&skip=${t*30}`);return{products:$(s.products),total:s.total}},L=async t=>await(await fetch(t)).json(),$=t=>{let s=[];return t.forEach(e=>{const n=new w(e.title,e.thumbnail,e.description,e.brand,e.category,e.price,e.tags,e.reviews,e.rating,e.dimensions,e.weight,e.availabilityStatus,e.returnPolicy,e.id);s.push(n)}),s},A=t=>`
        <div class="island product-card" data-id="${t.id}">
            <div class="card-img-wrap">
                <img src="${t.thumbnail}" alt="${t.title}" loading="lazy" />
            </div>
            <div class="card-body">
                <div class="card-title">${t.title}</div>
                <div class="card-price">$${t.price.toFixed(2)}</div>
                <div class="card-rating">
                    <i class="bi bi-star-fill text-warning"></i>
                    <span class="ms-1">${t.rating} (${t.reviews.length})</span>
                </div>
                <button class="btn-add" data-id="${t.id}">
                    <i class="bi bi-bag-plus me-1"></i>Add to Cart
                </button>
            </div>
        </div>
    `,u=t=>{const s=document.getElementById("product-grid");s.innerHTML=t.map(A).join("")},E=(t,s)=>{const e=Math.ceil(t/30),n=document.getElementById("pagination");for(let i=0;i<e;i++){const a=document.createElement("button");a.classList.add("page-btn"),a.setAttribute("data-page",i),a.innerHTML=i+1,a.addEventListener("click",s),n.appendChild(a)}};let o=[],c=0,d=0;const O=async t=>{c=parseInt(t.target.dataset.page);const{products:s}=await l(c);o=s,u(o)},C=async()=>{const{products:t,total:s}=await l(c);o=t,d=s,u(o),E(d,O)};document.addEventListener("DOMContentLoaded",()=>{C()});
