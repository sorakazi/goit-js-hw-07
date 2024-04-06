import { galleryItems } from "./gallery-items.js";

// Get the gallery list
const galleryList = document.querySelector(".gallery");

// Create HTML markup for each gallery item
const galleryHTML = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

// Append the HTML markup to the gallery list
galleryList.innerHTML = galleryHTML;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt", // Use "alt" attribute for captions
  captionDelay: 250, // Delay before showing captions (in milliseconds)
});

// Event listener for the 'show.simplelightbox' event
lightbox.on("show.simplelightbox");
