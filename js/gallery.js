import galleryItems from './gallery-items.js';

// 4.Подмена значения атрибута src элемента img.lightbox**image.
// 5.Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6.Очистка значения атрибута src элемента img.lightbox**image.

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const refs = {
  galleryList: document.querySelector('.js-gallery'),
  mdl: document.querySelector('.js-lightbox'),
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

refs.galleryList.innerHTML = createGalleryItemsMarcup(galleryItems);
// Открытие модального окна по клику на элементе галереи.

// Реализация делегирования на галерее ul.js-gallery и получение url большого
// изображения.
