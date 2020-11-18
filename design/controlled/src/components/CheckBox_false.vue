<template>
  <input type="checkbox" v-model="checked">
</template>

<script>
/**
 * Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
 * Instead, use a data or computed property based on the prop's value. Prop being mutated: "checked"
 * i.e. 하위에서 props 값을 변경하지 말라는 의미. 사용자 이벤트로 체크박스를 변경할 때마다 props인 checked 값이 변함
 */
export default {
  props: ['checked'],
}
</script>

<style>

</style>