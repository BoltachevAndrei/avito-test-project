import Api from './api/api.js';
import ObjectsModel from './models/objects-model.js';
import ObjectsController from './controllers/objects-controller.js';

const api = new Api();
const objectsModel = new ObjectsModel();
const mainContainer = document.querySelector(`.page__main`);
const objectsController = new ObjectsController(mainContainer, objectsModel, api);

api.getObjects(`items`)
  .then((objects) => {
    objectsModel.setObjects(objects);
    objectsController.render();
  });
