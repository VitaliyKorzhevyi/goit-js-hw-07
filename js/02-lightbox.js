import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGallaryElMarkup(galleryItems) {
   return galleryItems 
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
}).join('');}

const markupGallery = createGallaryElMarkup(galleryItems);
galleryEl.innerHTML = markupGallery;

new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
 });