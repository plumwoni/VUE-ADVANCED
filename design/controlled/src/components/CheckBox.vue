<template>
  <input type="checkbox" 
    v-bind:value="value" @click="toggleCheckBox">
</template>

<script>
/**
 * Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
 * Instead, use a data or computed property based on the prop's value. Prop being mutated: "checked"
 * i.e. 하위에서 props 값을 변경하지 말라는 의미. 사용자 이벤트로 체크박스를 변경할 때마다 props인 checked 값이 변함
 */
export default {
  /**
   * @input 이벤트
   * :value 값
   * 뷰 내부적으론 이 두개가 연속동작함. value가 props로 내려오고 사용자 input 이벤트를 발생시킨다.
   * <input v-model="something">
   *  ==> <input 
   *         v-bind:value="something"
   *         v-on:input="something = $event.target.value">
   * 
   * 그러므로 props 에 value를 설정해줘야 한다. 꼭!!
   * 그리고 사용자 이벤트를 상위 컴포넌트에 'input' 이벤트 이름으로 값과 함께 넘겨야 한다. 꼭!!!
   * 
   * 왜 이렇게 하느냐?? 컴포넌트의 데이터 의존성을 분리하기 위함.
   * 즉, 하위 컴포넌트에서 'checked'를 관리하는 것이 아니고 상위 컴포넌트에서 'checked'를 관리하도록 한 구조임.
   * 
   * 더 정확히 기술하면, 데이터 흐름은 App.vue의 초기 checked 값이 CheckBox.vue에게 value props 로 전달되고 
   * 사용자 이벤트가 발생하면 toggleCheckBox()가 실행되어 App.vue의 'input'에 이벤트를 발생시켜서 App.vue의 input에 '!this.value' 값을 전달한다.
   * App.vue의 input 값이 변경되었기에 CheckBox.vue에 props로 value 값을 다시 전달하여 CheckBox.vue 의 props 값이 변경된 것처럼 보인다. (사실은 전달된 값임)
   */

  props: ['value'],
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);  // 사용자 이벤트가 발생하면 현재의 값을 변환(예> false->true)하여 상위 컴포넌트에 넘겨줌
    }
  }
}
</script>

<style>

</style>