<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="Drawer"/>

        <Label class="drawer-item" @tap='$navigateTo(Category)' text="Categories"/>
        <Label class="drawer-item" @tap='$navigateTo(Another)' text="Another page"/>
        <Label class="drawer-item" @tap='$navigateTo(Another2)' text="Another page 2"/>
      </StackLayout>

      <StackLayout ~mainContent>
        <slot></slot>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>

  import Category from './App';
  import Another from './Another';
  import Another2 from './Another2';

  export default {
    data() {
      return {
        Category : Category,
        Another : Another,
        Another2 : Another2,
      }
    }
  }
</script>
