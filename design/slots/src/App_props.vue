<template>
  <div>
    <ul>
      <item v-for="item in items" :item="item" :key="item.id"></item>
    </ul>
  </div>
</template>

<script>
import Item from './Item_props.vue';

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5'],
    }
  }
}
</script>

<style>

</style>