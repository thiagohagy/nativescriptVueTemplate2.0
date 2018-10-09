<template>

  <RadSideDrawer  ref="drawer">

    <StackLayout ~drawerContent backgroundColor="#ffffff">
      <Label class="drawer-header" text="Drawer"/>
      <Label class="drawer-item" @tap='$navigateTo(Home); $refs.drawer.nativeView.closeDrawer()' text="Home"/>
      <Label class="drawer-item" @tap='$navigateTo(About); $refs.drawer.nativeView.closeDrawer()' text="About"/>
    </StackLayout>
    
    <Frame ~mainContent>
      <login></login>      
    </Frame>
    
  </RadSideDrawer>

</template>

<script>

  import Home from './Home';
  import About from './About';
  import Login from './auth/Login';

  import { EventBus } from './../shared/eventBus.js'

  export default {
    data() {
      return {
        Home: Home,
        About: About,
      }
    },
    components:{
      'login':Login
    },
    mounted(){

      EventBus.$on('openMenu', () => {
        this.$refs.drawer.nativeView.showDrawer()
      });

      EventBus.$on('logout', () => {
        this.$navigateTo(Login);          
      });
    }
  }
</script>
