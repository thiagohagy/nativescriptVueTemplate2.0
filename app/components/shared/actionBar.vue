<template>
    

    <ActionBar>
        <GridLayout width="100%" columns="auto, *">
            <Label text="MENU" @tap='openMenu' col="0"/>
            <Label class="title" :text="pageName"  col="1"/>
        </GridLayout>
    </ActionBar>

</template>

<script>

import { EventBus } from './../../shared/eventBus.js'

export default {
  props:['pageName'],
  methods:{
    openMenu(){
      EventBus.$emit('openMenu');
    }
  }
}
</script>
