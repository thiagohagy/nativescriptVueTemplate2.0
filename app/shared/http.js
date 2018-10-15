import Vue from 'nativescript-vue'
import Axios from 'axios/dist/axios'
import store from './store'
import Toaster from 'nativescript-toast'
import { EventBus } from './eventBus'

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
  } else {
    EventBus.$emit('loadingRequestStart');
  }

  return config;
})

// request end
axios.interceptors.response.use(response => {
  EventBus.$emit('loadingRequestFinish');
  response = response.data;
  return response;
}, (error) => {
  EventBus.$emit('loadingRequestFinish');
  Toaster.makeText(error.toString()).show();
  return error;
});

const http = {
  post: (url, data) => axios.post(url, data),
  put: (url, data) => axios.put(url, data),
  get: (url) => axios.get(url),
  delete: (url, data) => axios.delete(url, data)
};

Vue.prototype.$http = http;


