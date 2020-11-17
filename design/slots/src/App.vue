<template>
  <div>
    <ul>
      <item v-for="item in items" :key="item.id">{{ item }}</item> <!-- 이 방식은 데이터가 상위 컴포넌트에 머물러 있음. -->

      <hr/>

      <item>아이템 1</item> <!-- 하위 컴포넌트의 slot 영역을 하기와 같이 확장할 수 있으며 상위에서 스타일도 지정할 수 있음 -->
      <item>
        아이템 2 <button>Click me</button>
      </item>
      <item>
        <div>아이템 3</div>
        <img src='./assets/logo.png' alt="로고">
      </item>
      <item>
        <div style="color: blue; font-size: 20px;">아이템 4</div>
      </item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

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