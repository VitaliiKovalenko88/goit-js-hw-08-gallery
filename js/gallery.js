import galleryItems from './gallery-items.js';

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  overlay: document.querySelector('.lightbox__overlay'),
  mdl: document.querySelector('.js-lightbox'),
  imageMdl: document.querySelector('.lightbox__image'),
  closeBtn: document.querySelector('[data-action="close-lightbox"]'),
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
  event.preventDefault();

  const imageTarget = event.target;

  if (!imageTarget.classList.contains('gallery__image')) {
    return;
  }

  refs.mdl.classList.add('is-open');
  refs.imageMdl.src = imageTarget.dataset.source;
  refs.imageMdl.alt = imageTarget.alt;
  window.addEventListener('keydown', onArrowPress);
  window.addEventListener('keydown', onEscPress);
};

// Реализация делегирования на галерее ul.js-gallery и получение url большого
// изображения.

const onArrowPress = event => {
  if (event.code !== 'ArrowLeft' && event.code !== 'ArrowRight') {
    return;
  }

  const currentImage = galleryItems.find(
    img => image.original === refs.imageMdl.src,
  );

  let index =
    event.code === 'ArrowLeft'
      ? galleryItems.indexOf(currentImage) - 1
      : galleryItems.indexOf(currentImage) + 1;
  if (index < 0) {
    index = galleryItems.length - 1;
  }
  if (index > galleryItems.length - 1) {
    index = 0;
  }

  // Подмена значения атрибута src элемента img.lightbox**image.
  refs.imageMdl.src = galleryItems[index].original;
  refs.imageMdl.alt = galleryItems[index].description;
};

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
const onCloseModal = () => {
  window.removeEventListener('keydown', onEscPress);
  window.removeEventListener('keydown', onArrowPress);

  refs.mdl.classList.remove('is-open');
  // Очистка значения атрибута src элемента img.lightbox**image.
  refs.imageMdl.src = '';
  refs.imageMdl.alt = '';
};

const onOverlayClick = event => {
  if (event.target === refs.overlay) {
    onCloseModal();
  }
};

const onEscPress = event => {
  if (event.code === 'Escape') {
    onCloseModal();
  }
};

refs.galleryList.innerHTML = createGalleryItemsMarcup(galleryItems);
refs.galleryList.addEventListener('click', onOpenModal);
refs.closeBtn.addEventListener('click', onCloseModal);
refs.overlay.addEventListener('click', onOverlayClick);
