// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const gelleryRef = document.querySelector('.gallery');

const renderImages = galleryItems
  .map(({ preview, original, description }) => {
    return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
  })
  .join('');

gelleryRef.innerHTML = '';
gelleryRef.insertAdjacentHTML('beforeend', renderImages);

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
