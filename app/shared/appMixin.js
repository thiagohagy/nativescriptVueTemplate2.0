
import Vue from 'nativescript-vue';
import ActionBar from './../components/shared/actionBar'

Vue.mixin({
  data() {
    return {
    }
  },
  components: {
    'my-actionBar': ActionBar
  }
});