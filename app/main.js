import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import Http from './shared/http'
import Store from './shared/store'
import appMixin from './shared/appMixin'

import './assets/css/custom.css'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon)

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

new Vue({
  render: h => h(App)
}).$start();
