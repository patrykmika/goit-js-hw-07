import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const newGallery = [];

galleryItems.forEach(element => {

    const galleryItem = document.createElement("div");
    const galleryItemLink = document.createElement("a");
    const galleryItemImage = document.createElement("img");
    
    galleryItem.className = "gallery__item";
    galleryItemLink.className = "gallery__link";
    galleryItemImage.className = "gallery__image";

    galleryItemLink.href = element.original;
    galleryItemImage.src = element.preview;
    galleryItemImage.setAttribute("data-source", element.original);
    galleryItemImage.alt = element.description;
    
    galleryItem.append(galleryItemLink);
    galleryItemLink.append(galleryItemImage);
    newGallery.push(galleryItem);
});

gallery.append(...newGallery);

gallery.addEventListener("click", (event) => {
    
    event.preventDefault();

    const target = event.target.getAttribute("data-source");

    const instance = basicLightbox.create(`<img src="${target}" width="800" height="600">`);

    instance.show();

    gallery.addEventListener('keydown', (e) => {
        if (e['key'] === 'Escape') {
            instance.close();
        }
    })
})