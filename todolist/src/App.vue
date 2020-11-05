<template>
  <div id="app">
    <h1>TODO List</h1>
    <div>
      <app-header />
      <item-input />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import appHeader from "@/components/header.vue";
import itemInput from "@/components/item-input.vue";

@Component({
  components: {
    appHeader,
    itemInput
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  padding: 100px;
}
</style>
