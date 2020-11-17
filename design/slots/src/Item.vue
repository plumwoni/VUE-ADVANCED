<template>
  <li>
    <!-- 아이템 1 ==> 아래 태그들 다 무시하고 이렇게만 정의하면 App.vue에서 "<item>아이템 #</item>" 으로 정의되어 있는 것들이 무용하게 됨 -->
    <slot>
      <!-- 등록하는 곳에서 정의할 영역 -->
    </slot>
  </li>
</template>