const METHOD = `GET`;

const REMOTE_HOST = `http://134.209.138.34`;

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Api {
  constructor() {
    this._remoteHost = REMOTE_HOST;
  }

  getObjects(url) {
    return this._load({url: `${url}`})
      .then((response) => response.json());
  }

  getObject(id) {
    return this._load({url: `item/${id}`})
    .then((response) => response.json());
  }

  _load({url, method = METHOD, body = null, headers = new Headers()}) {
    return fetch(`${this._remoteHost}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}
