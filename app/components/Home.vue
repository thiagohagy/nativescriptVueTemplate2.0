<template>
  <Page>
    <my-actionBar pageName='Home'></my-actionBar>
    <Label>Home</Label>
  </Page>
</template>

<script>
export default {
  mounted() {
    this.$http.get('/v1/tags/all').then((response) => {
      console.log('response tags/all comp');
      console.log(response);
    }, (error) => {
      console.log('response tags/all err');
      console.log(error);
    })
  },
}
</script>
