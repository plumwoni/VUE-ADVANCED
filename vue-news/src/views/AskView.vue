<template>
  <div>
    <div v-for="item in ask" v-bind:key="item.id">{{ item.title }}</div>
  </div>

</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data() {
    return {
      ask: []
    }
  },

  created() {
    fetchAskList()
      .then( response => {
        console.log(response.data);
        this.ask = response.data;
      })
      .catch( error => {
        console.error(error);
      });
  }
}
</script>

<style>

</style>