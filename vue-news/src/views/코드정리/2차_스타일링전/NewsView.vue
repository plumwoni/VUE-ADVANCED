<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedNews" :key="item.id" class="post">
        <!--  포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역  -->
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
    <!-- <div v-for="user in fetchedNews" :key="user.id">{{ user.title }}</div> -->
    <!-- 11/11 스타일링으로 하기 주석블럭 전체 주석처리 -->
    <!-- <p v-for="item in fetchedNews" :key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        < !-- <router-link v-bind:to="'/user/'+ item.user">{{ item.user }}</router-link> -- >
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>