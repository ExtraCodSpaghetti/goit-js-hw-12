import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api';
import { renderPhotoCards } from './js/render-functions';

const formEl = document.querySelector('.form-search');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let query = '';
let lightbox;

loader.style.display = 'none';
loadMoreBtn.classList.add('is-hidden'); // Скрываем кнопку изначально

const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const onFormSubmit = async event => {
  event.preventDefault();
  galleryContainer.innerHTML = '';

  query = event.currentTarget.elements.user_query.value.trim();
  page = 1;
  loadMoreBtn.classList.add('is-hidden'); // Скрываем кнопку при новом поиске
  loader.style.display = 'block';

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      position: 'topRight',
      message: 'Please enter a search query!',
    });
    loader.style.display = 'none';
    return;
  }

  try {
    const { data } = await fetchPhotos(query, page);

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    const markup = renderPhotoCards(data.hits);
    galleryContainer.insertAdjacentHTML('beforeend', markup);

    lightbox = new SimpleLightbox('.gallery-item', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
    lightbox.refresh();

    formEl.reset();
    loader.style.display = 'none';

    // Если пришло меньше 40 изображений, показываем уведомление и НЕ показываем кнопку
    if (data.hits.length < 40) {
      iziToast.info({
        title: 'Info',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
      return;
    }

    // Иначе показываем кнопку "Загрузить еще"
    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = 'none';
  }
};

formEl.addEventListener('submit', onFormSubmit);

const onLoadMoreBtnClick = async () => {
  loader.style.display = 'block';
  page++;

  try {
    const { data } = await fetchPhotos(query, page);
    loader.style.display = 'none';

    if (!data.hits.length) {
      iziToast.info({
        title: 'Info',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      return;
    }

    const markup = renderPhotoCards(data.hits);
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    smoothScroll();
    lightbox.refresh();

    // Если загружено меньше 40 изображений, скрываем кнопку и показываем сообщение
    if (data.hits.length < 40) {
      iziToast.info({
        title: 'Info',
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Failed to load images. Please try again later.',
    });
  }
};

const smoothScroll = () => {
  const { height: cardHeight } =
    galleryContainer.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};
