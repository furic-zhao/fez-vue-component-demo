import axios from 'axios';

import qs from 'qs';

const instance = axios.create({
  baseURL: '',
  withCredentials: true //跨域请求
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default {
  get(url, params) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, {
          params: Object.assign({}, params, { t: new Date() * 1 })
        })
        .then((response) => {
          if (response.status === 200 || response.status === undefined) {
            if (response.data && response.data.errno === 0) {
              resolve(response.data.data);
            } else {
              reject(response.data)
            }
          } else {
            reject(response.status);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  },

  post(url, params) {
    return new Promise((resolve, reject) => {
      instance.post(url, Object.assign({}, params))
        .then((response) => {
          if (response.status === 200 || response.status === undefined) {
            if (response.data && response.data.errno === 0) {
              resolve(response.data.data);
            } else {
              reject(response.data)
            }
          } else {
            reject(response.status);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  }
}
