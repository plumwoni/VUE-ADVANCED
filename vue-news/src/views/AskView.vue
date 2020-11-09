<template>
  <div>
    <!-- <div v-for="item in fetchedAsk" :key="item.id">{{ item.title }}</div> -->
    <p v-for="item in fetchedAsk" :key="item.id">
      <a v-bind:href="`item/${item.id}`">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }}{{ item.user }}</small>
    </p>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>