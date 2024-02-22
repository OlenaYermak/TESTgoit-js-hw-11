//    const KEY = "42504906-5b025263817bd530cbe95d02a";
// const BASE_URL = "https://pixabay.com/api/";
// const QUERY = searchQueryInput.value;

// const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;

// export const function getImages() {
//  return fetch(LINK)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Image error!')
//             }

//             return response.json()
//         })
//         .catch(error){
//          console.error("Error fetching data:", error);
//   iziToast.error({
//     title: "Error",
//     message: "An error occurred while fetching images. Please try again later.",
//         });
// }


const apiKey = '42504906-5b025263817bd530cbe95d02a';

export const fetchImages = async (searchQuery) => {
  const endpoint = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.hits.length === 0) {
      throw new Error('No images found.');
    }

    return data.hits;
  } catch (error) {
    throw new Error('Error fetching images.');
  }
};
