// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";



// const imageSearchForm = document.querySelector(".form-search");

//     const searchQueryInput = document.querySelector(".form-input");
// const imageGallery = document.querySelector(".image-container");

// import {getImages} from "./js/pixabay-api";



import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderGallery, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions';

const searchForm = document.querySelector(".form-search");

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchInput = document.querySelector(".form-input");
  const searchQuery = searchInput.value.trim();

  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
    });
    return;
  }

  showLoadingIndicator();

  try {
    const images = await fetchImages(searchQuery);
    renderGallery(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'No images found. Please try again.',
    });
  } finally {
    hideLoadingIndicator();
  }
});