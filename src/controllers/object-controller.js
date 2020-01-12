import {render, RenderPosition} from '../utils/render.js';
import ObjectPreviewComponent from '../components/object-preview-component.js';
import ObjectDetailedComponent from '../components/object-detailed-component.js';

const NORMALIZE_CSS_LINK = `<link rel="stylesheet" href="http://localhost:8080/css/normalize.css">`;
const STYLE_CSS_LINK = `<link rel="stylesheet" href="http://localhost:8080/css/style.css">`;

export default class ObjectController {
  constructor(container, object, api) {
    this._container = container;
    this._object = object;
    this._api = api;
  }

  render() {
    const container = this._container;
    const object = this._object;
    const objectPreviewComponent = new ObjectPreviewComponent(object);
    render(container, objectPreviewComponent, RenderPosition.BEFOREEND);
    objectPreviewComponent.setOnImageClick(() => {
      this._api.getObject(`${object.id}`)
        .then((detailedObject) => {
          const newTab = window.open(``);
          const newTabHead = newTab.document.querySelector(`head`);
          newTabHead.insertAdjacentHTML(RenderPosition.BEFOREEND, NORMALIZE_CSS_LINK);
          newTabHead.insertAdjacentHTML(RenderPosition.BEFOREEND, STYLE_CSS_LINK);
          const newTabBody = newTab.document.querySelector(`body`);
          const objectDetailedComponent = new ObjectDetailedComponent(detailedObject[0]);
          render(newTabBody, objectDetailedComponent, RenderPosition.BEFOREEND);
        });
    });
  }
}
