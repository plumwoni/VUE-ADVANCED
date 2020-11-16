<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.error(error);
        });
    }, 3000);
    // this.$store.dispatch('FETCH_NEWS')
    //   .then(() => {
    //     console.log('fetched');
    //     bus.$emit('stop:spinner');
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // bus.$emit('end:spinner');
  }
}
</script>

<style>
</style>