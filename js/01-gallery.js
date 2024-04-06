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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
  )
  .join("");

// Append the HTML markup to the gallery list
galleryList.innerHTML = galleryHTML;

// Add click event listener to images
galleryList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    const imageSource = e.target.dataset.source;
    const imageDescription = e.target.alt;
    // Open the clicked image in a lightbox
    const lightbox = basicLightbox.create(
      `<img src="${imageSource}" alt="${imageDescription}">`
    );
    lightbox.show();

    // Add event listener for the Escape key to close the lightbox
    const handleOnEscKeyPress = (event) => {
      if (event.key === "Escape") {
        lightbox.close();
        window.removeEventListener("keydown", handleOnEscKeyPress);
      }
    };

    window.addEventListener("keydown", handleOnEscKeyPress);
  }
});
