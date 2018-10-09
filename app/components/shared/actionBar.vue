<template>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *, 40">
          <Label text="MENU" @tap='openMenu' col="0"/>
          <Label class="title" :text="pageName"  col="1"/>
          <ActivityIndicator col="2" :busy="isBusy" width="30" height="30" color="white" class="activity-indicator"></ActivityIndicator>
      </GridLayout>
    </ActionBar>
</template>

<script>

import { EventBus } from './../../shared/eventBus.js'

export default {
  props:['pageName'],
  data(){
    return {
      isBusy: false,
    }
  },
  methods:{
    openMenu(){
      EventBus.$emit('openMenu');
    }
  },
  beforeMount() {
    EventBus.$on('loadingRequestStart', () => {
      this.isBusy = true;
    });

    EventBus.$on('loadingRequestFinish', () => {
      this.isBusy = false;
    });
    
  },
}

</script>
