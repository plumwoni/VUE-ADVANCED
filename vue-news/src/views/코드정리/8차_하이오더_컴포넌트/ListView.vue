<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  }
  // NewsView, AskView, JobsView의 created() 에서 데이터를 불러오던 일을 여기에 할 수도 있지만 안함
  // CreateListView.js 의 createListView() 함수 안에서 한다
}
</script>

<style>

</style>