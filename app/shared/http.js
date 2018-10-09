import Vue from 'nativescript-vue'
import Axios from 'axios/dist/axios'
import store from './store'
import Toaster from 'nativescript-toast'


// import { LoadingIndicator } from "nativescript-loading-indicator"
// loading indicator config
// const loader = new LoadingIndicator();
// const loaderOptions = {
//   message: 'Loading...',
//   android: {
//     indeterminate: true,
//     cancelable: true,
//   }
// }

let baseURL = 'http://meusistema.localtunnel.me';
const axios = Axios.create({
  baseURL: `${baseURL}/api/`
});

// request start
axios.interceptors.request.use(config => {

  config.headers.Authorization = store.getters.authToken();

  if (config.url.match(/v1\//gm) && !store.getters.isLogged()) { // if is not a public route  (v1 on url ) and the user is not logged
    Toaster.makeText("You are not logged in").show();
    store.mutations.logout();
    console.log('not logged');
  }

  return config;
})

// request end
axios.interceptors.response.use(response => {
  response = response.data;
  return response;
}, (error) => {
  Toaster.makeText(error.toString()).show();
  return response;
});

const http = {
  post: (url, data) => axios.post(url, data),
  put: (url, data) => axios.put(url, data),
  get: (url) => axios.get(url),
  delete: (url, data) => axios.delete(url, data)
};

Vue.prototype.$http = http;


