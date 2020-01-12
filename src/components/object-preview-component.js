import AbstractComponent from './abstract-component.js';

const createObjectPreviewTemplate = (object) => {
  return (
    `<ul class="object-preview">
      <li>
        <img  class="object-preview__image" src="${object.previewImage}" alt="Превью">
      </li>
      <li class="object-preview__id visually-hidden">${object.id}</li>
      <li class="object-preview__address">Адрес: ${object.address}</li>
      <li class="object-preview__title">Заголовок объявления: ${object.title}</li>
      <li class="object-preview__price">Цена: ${object.price}</li>
    </ul>`
  );
};

export default class ObjectPreviewComponent extends AbstractComponent {
  constructor(object) {
    super();
    this._object = object;
  }

  getTemplate() {
    return createObjectPreviewTemplate(this._object);
  }

  setOnImageClick(handler) {
    this.getElement().querySelector(`.object-preview__image`).addEventListener(`click`, () => {
      handler();
    });
  }
}
