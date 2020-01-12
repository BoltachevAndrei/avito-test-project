export default class ObjectsModel {
  constructor() {
    this._objects = [];
    this._object = ``;
  }

  getObjects() {
    return this._objects;
  }

  setObjects(objects) {
    this._objects = Array.from(objects);
  }
}
