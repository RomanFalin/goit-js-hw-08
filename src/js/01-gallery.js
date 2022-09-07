import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imgGallery = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

imgGallery.insertAdjacentHTML("afterbegin", imgMarkup);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join("")
}

var lightbox = new SimpleLightbox('.gallery__link', {captionsData: "alt", captionDelay: 250});