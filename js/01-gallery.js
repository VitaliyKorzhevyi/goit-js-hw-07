import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");

function createGallaryElMarkup(galleryItems) {
   return galleryItems 
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>
        `;
}).join('');}

const markupGallery = createGallaryElMarkup(galleryItems);
galleryEl.innerHTML = markupGallery;

// !.....

galleryEl.addEventListener("click", onImgClick);

function onImgClick(e) {

    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `
        <img src="${e.target.dataset.source}">
    `);
      instance.show();
    // console.log(e.target.dataset.source );

    document.addEventListener("keydown", (e) =>{
    if (e.key === "Escape") instance.close();
    // console.log(e.key);
    })
};

