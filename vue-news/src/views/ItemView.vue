<template>
  <div>
    <!-- {{ this.$store.state.item }} // 개발 시 참조로 활용할 때 좋음 -->
    <p>{{ fetchedItem.title }}</p>
    <p>{{ fetchedItem.content }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>

</style>