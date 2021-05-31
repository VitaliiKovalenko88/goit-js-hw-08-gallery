import galleryItems from './gallery-items.js';

// 4.Подмена значения атрибута src элемента img.lightbox**image.
// 5.Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6.Очистка значения атрибута src элемента img.lightbox**image.

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  overlay: document.querySelector('.lightbox__overlay'),
  mdl: document.querySelector('.js-lightbox'),
  imageMdl: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('.lightbox__button'),
};

const createGalleryItemsMarcup = gallery =>
  gallery
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
    )
    .join('');

// Открытие модального окна по клику на элементе галереи.
const onOpenModal = event => {
  const imageTarget = event.target;

  if (!imageTarget.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();

  refs.mdl.classList.add('is-open');
  refs.imageMdl.src = imageTarget.dataset.source;
  refs.imageMdl.alt = imageTarget.alt;

  window.addEventListener('keydown', onArrowPress);
  window.addEventListener('keydown', onEscPress);
};

const onCloseModal = () => {
  window.removeEventListener('keydown', onEscPress);
  window.removeEventListener('keydown', onArrowPress);
  refs.mdl.classList.remove('is-open');
  refs.imageMdl.src = '';
  refs.imageMdl.alt = '';
};

const onOverlayClick = event => {
  if (event.target === refs.overlay) {
    onCloseModal;
  }
};

const onEscPress = event => {
  if (event.code === 'Escape') {
    onCloseModal();
  }
};
// Реализация делегирования на галерее ul.js-gallery и получение url большого
// изображения.

const onArrowPress = event => {
  if (event.code !== 'Arrowleft' && event.code !== 'ArrowRight') {
    return;
  }

  const currentImage = galleryItems.find(
    img => img.original === refs.imageMdl.src,
  );

  const galleryIndex = galleryItems.indexOf(currentImage);
  let index;
  index = event.code === 'ArrowLeft' ? galleryIndex - 1 : galleryIndex + 1;
  if (index < 0) {
    index = galleryItems.length - 1;
  }
  if (index > galleryItems.length - 1) {
    index = 0;
  }
  refs.imageMdl.src = galleryItems[index].original;
  refs.imageMdl.alt = galleryItems[index].description;
};

refs.galleryList.innerHTML = createGalleryItemsMarcup(galleryItems);
refs.galleryList.addEventListener('click', onOpenModal);
refs.galleryList.addEventListener('click', onCloseModal);
refs.galleryList.addEventListener('click', onOverlayClick);
