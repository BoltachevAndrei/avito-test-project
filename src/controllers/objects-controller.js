import ObjectController from './object-controller.js';

const renderObjects = (container, objects, api) => {
  return objects.map((object) => {
    const objectController = new ObjectController(container, object, api);
    objectController.render(object);
    return objectController;
  });
};

export default class ObjectsController {
  constructor(container, tasksModel, api) {
    this._container = container;
    this._tasksModel = tasksModel;
    this._api = api;
  }

  render() {
    const container = this._container;
    const objects = this._tasksModel.getObjects();
    const api = this._api;

    renderObjects(container, objects, api);
  }
}
