<template>
  <app-wrapper>
    <ListView for="item in form.categorias">
      <v-template>
        <Label :text="item.name" class="listItem"/>
      </v-template>
    </ListView>
  </app-wrapper>

</template>

<script>

import Toast from 'nativescript-toast';
import Wrapper from './Wrapper';
import axios from 'axios/dist/axios';

export default {
  data(){
    return {
      form:{
        categorias:[]
      },
    }
  },
  mounted(){
    console.log('make request');
    this.$http.get("categorias/all").then(result => {
        this.categorias = result.data;
    }, error => {
        Toaster.makeText('Any categorie found :(').show()
    });
  },
  components:{
    'app-wrapper': Wrapper
  }
}
</script>
