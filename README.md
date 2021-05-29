# goit-js-hw-08-gallery

Задание Создай галерею с возможностью клика по ее элементам и просмотра
полноразмерного изображения в модальном окне. Превью результата посмотри по
ссылке. Разбей задание на несколько подзадач:

1.Создание и рендер разметки по массиву данных и предоставленному шаблону.
2.Реализация делегирования на галерее ul.js-gallery и получение url большого
изображения. 3.Открытие модального окна по клику на элементе галереи. 4.Подмена
значения атрибута src элемента img.lightbox**image. 5.Закрытие модального окна
по клику на кнопку button[data-action="close-lightbox"]. 6.Очистка значения
атрибута src элемента img.lightbox**image.

Это необходимо для того, чтобы при следующем открытии модального окна, пока
грузится изображение, мы не видели предыдущее. Стартовые файлы В папке src ты
найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями. В файле
gallery-items.js есть массив объектов содержащих информацию о изображениях:
маленькое изображение, оригинальное и описание. Разметка элемента галереи Ссылка
на оригинальное изображение должна храниться в data-атрибуте source на элементе
img, и указываться в href ссылки (это необходимо для доступности).

<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
