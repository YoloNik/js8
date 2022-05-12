// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);

const createCart = galleryItems
  .map(cart => {
    return `<a class="gallery__item" href=${cart.original}>
      <img
        class="gallery__image"
        src=${cart.preview}
        alt=${cart.description}
      />
    </a>`;
  })
  .join('');
gallery.innerHTML = createCart;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
});
