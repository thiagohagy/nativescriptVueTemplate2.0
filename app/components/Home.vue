<template>
  <Page>
    <my-actionBar pageName='Home'></my-actionBar>
    
    <ListView for="item in categories">
      <v-template>
        <Label :text="item.name" class="listItem"/>
      </v-template>
    </ListView>

  </Page>
</template>

<script>
export default {
  data (){
    return {
      categories:[],
    }
  },
  mounted() {
    this.$http.get('/v1/categoria/all').then((response) => {
      this.categories = response.data;
    }, (error) => {
      console.log('response category err');
    })
  },
}
</script>

<style scoped>
  .listItem {
    color: #222;
    padding: 15;
  }
</style>

