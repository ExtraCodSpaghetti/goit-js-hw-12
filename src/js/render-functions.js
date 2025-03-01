export const renderPhotoCards = photoData => {
  return photoData
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
    <a href="${largeImageURL}" class="gallery-item">
  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" class="gallery-image" loading="lazy" width="360" />
  <div>
    <ul class="inform">
                    <li class="inform-link">
                        <h2 class="inform-title">Likes:</h2>
                        <p class="inform-dan">${likes}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Views:</h2>
                        <p class="inform-dan">${views}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Comments:</h2>
                        <p class="inform-dan">${comments}</p>
                    </li>
                    <li class="inform-link">
                        <h2 class="inform-title">Downloads:</h2>
                        <p class="inform-dan">${downloads}</p>
                    </li>
                </ul>
  </div>
  </div>
  </a>`
    )
    .join('');
};
