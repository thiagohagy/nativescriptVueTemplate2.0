import * as  applicationSettings from 'application-settings'
import { EventBus } from './eventBus'

const state = {
  IS_LOGGED: false,
  AUTH_TOKEN: false,
};

const mutations = {
  login(payload) {
    console.log('make login');

    state.IS_LOGGED = true;
    state.AUTH_TOKEN = payload.token;
    
    if (payload.keepLogin) {
      let storedData = {
        login: payload.login,
        password: payload.password
      };
      applicationSettings.setString('login', JSON.stringify(storedData));
    } else {
      applicationSettings.setString('login', '');
    }
  },
  
  logout() {
    state.IS_LOGGED = false;
    state.AUTH_TOKEN = false;
    applicationSettings.setString('login', '');
    EventBus.$emit('logout'); // to App.vue
  },
};

const getters = {
  isLogged: () => state.IS_LOGGED,
  authToken: () => state.AUTH_TOKEN,
};


export default {
  state,
  getters,
  mutations,
};
