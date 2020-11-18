<template>
  <!-- 컴포넌트에 v-model을 사용하면 내부적으로는 v-bind:value="checked" v-on:input="value => { something = value }"로 속성이 생성된다. -->
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: true,
    }
  }
}
</script>

<style>

</style>