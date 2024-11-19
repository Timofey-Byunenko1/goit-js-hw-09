import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as l}from"./assets/vendor-CgTBfC_f.js";const t=[{preview:"path-to-preview-image1.jpg",original:"path-to-original-image1.jpg",description:"Image 1 Description"},{preview:"path-to-preview-image2.jpg",original:"path-to-original-image2.jpg",description:"Image 2 Description"}],o=document.querySelector(".gallery"),g=a=>a.map(({preview:e,original:i,description:r})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${e}"
            alt="${r}"
          />
        </a>
      </li>
  `).join("");o.innerHTML=g(t);new l(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
