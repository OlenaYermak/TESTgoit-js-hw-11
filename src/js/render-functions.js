



// function displayImages(images) {
//   const galleryElement = document.getElementById('gallery');
//   galleryElement.innerHTML = ""; // Очищаємо галерею перед відображенням нових зображень

//   images.forEach(image => {
//     const imageElement = document.createElement('img');
//     imageElement.src = image.webformatURL;
//     imageElement.alt = image.tags;
//     galleryElement.appendChild(imageElement);
//   });
// }


import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderGallery = (images) => {
  const galleryContainer = document.querySelector(".image-container");
  galleryContainer.innerHTML = '';

  images.forEach((image) => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const imageUrl = image.webformatURL;
    const imageAlt = image.tags;

    imageCard.innerHTML = `
      <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${imageAlt}">
        <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
      </a>
    `;

    galleryContainer.appendChild(imageCard);
  });

  // Refresh SimpleLightbox after adding new elements
  const lightbox = new SimpleLightbox('.image-card a');
  lightbox.refresh();
};

export const showLoadingIndicator = () => {
   "Show loading indicator logic here"
};

export const hideLoadingIndicator = () => {
  "Hide loading indicator logic here"
};