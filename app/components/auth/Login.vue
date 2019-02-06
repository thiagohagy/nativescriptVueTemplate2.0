<template>
  <Page class="page" actionBarHidden="true">

		<StackLayout orientation="vertical" verticalAlignment="center" >
      
      <ActivityIndicator col="2" :busy="isBusy" width="70" height="70" color="lightblue" class="activity-indicator"></ActivityIndicator>

      <Image id='logo' src='~/assets/images/logo.png' width='50%' />
      <Label id='logoText' textAlignment='center' >My app</Label>

      <TextField width='90%' v-model='form.login'    hint='Login...'  />
			<TextField width='90%' v-model='form.password' hint='Senha' secure='true' />

      <WrapLayout orientation="horizontal" verticalAlignment="center" width='90%' >
        <Switch v-model="form.keepLogin" />
				<Label text="Keep me logged "></Label>
			</WrapLayout>

      <Label  horizontalAlignment="center" class="fa"  row="6" col="1" >We have icons too {{ 'fa-heart' | fonticon}}</Label>

      <Button class="btn btn-primary" text="Login" @tap="makeLogin" />
      <Button class="btn btn-primary" text="Register" @tap="$navigateTo(Register)" />

		</StackLayout>

  </Page>
</template>

<script>

import Home from './../Home';
import Register from './Register';
import Toaster from 'nativescript-toast';
import { mapGetters, mapMutations } from 'vuex';
import { EventBus } from './../../shared/eventBus';
import Store from './../../shared/store';

import * as  applicationSettings from 'application-settings'

export default {
  data () {
    return {
      Register: Register,
      Home: Home,
        form:{
        login: 'login',
        password: '123',
        keepLogin: false,
      },
      isBusy:false,
    }
  },
  methods: {
    makeLogin(){
      this.$http.post("cli/auth", this.form ).then((response) => {
        if (response.success) {
          let data = this.form;
          data.token = response.token;

          Store.mutations.login(data);
          this.$navigateTo(Home);
        } else {
          Toaster.makeText('User not found').show();
        }
      });
    },
  },
  beforeMount() {
    EventBus.$on('loadingRequestStart', () => {
      this.isBusy = true;
    });

    EventBus.$on('loadingRequestFinish', () => {
      this.isBusy = false;
    });
  },
  mounted(){
    let loginData = applicationSettings.getString('login');
    if (loginData) {
      loginData = JSON.parse(loginData);
      this.form.login = loginData.login;
      this.form.password = loginData.password;
      this.makeLogin();
    }
  }
  
}
</script>

<style scoped>
  #logoText {
    font-size: 30px
  }

</style>
