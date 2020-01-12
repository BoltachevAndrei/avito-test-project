import AbstractComponent from './abstract-component.js';

const createImagesTemplate = (images) => {
  return images.map((image) =>
    `<li class="images-list__item">
      <img src="${image}" alt="Фотография объекта">
    </li>`)
  .join(`\n`);
};

const createObjectDetailedTemplate = (object) => {
  return (
    `<ul class="object-detailed">
      <li class="object-detailed__id visually-hidden">${object.id}</li>
      <li class="object-detailed__address">Адрес: ${object.address}</li>
      <li class="object-detailed__title">Заголовок объявления: ${object.title}</li>
      <li class="object-detailed__price">Цена: ${object.price}</li>
      <li class="object-detailed__description">Полное описание: ${object.description}</li>
      <li class="object-detailed__seller-name">Имя продавца: ${object.sellerName}</li>
      <li>
        <ul class="object-detailed__images images-list">${createImagesTemplate(object.images)}</ul>
      </li>
    </ul>`
  );
};

export default class ObjectDetailedComponent extends AbstractComponent {
  constructor(object) {
    super();
    this._object = object;
  }

  getTemplate() {
    return createObjectDetailedTemplate(this._object);
  }
}
