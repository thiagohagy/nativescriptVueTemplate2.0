<template>
  <app-wrapper>
    <ListView for="item in form.tags">
      <v-template>
        <Label :text="item.name" class="listItem"/>
      </v-template>
    </ListView>
  </app-wrapper>

</template>

<script>

// import Toast from 'nativescript-toast';
import Wrapper from './shared/Wrapper';
import axios from 'axios/dist/axios';

export default {
  data(){
    return {
      form:{
        tags:[]
      },
    }
  },
  mounted(){
    console.log('make request');
    this.$http.get("categorias/all").then(result => {
        console.log(result)
    }, error => {
        console.error(error);
    });
    // this.$http.get('/api/')
    // .then(function (response) {
    //   console.log('response');
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log('error');
    //   console.log(error);
    // });
  },
  components:{
    'app-wrapper': Wrapper
  }
}
</script>
