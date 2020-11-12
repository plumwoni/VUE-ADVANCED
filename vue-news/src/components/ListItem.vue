<template>
  <div>
    <ul class="item-list">
      <!-- <li v-for="item in fetchedNews" :key="item.id" class="post"> -->
      <li v-for="item in listItems" :key="item.id" class="post">
        <!--  포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역  -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="item-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <a :href="`item/${item.id}`">{{ item.title }}</a>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link 
              v-if="item.user"
              v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url">{{ item.domain }}</a> <!-- domain 정보가 item.user가 있으면 없으므로 화면에 'No영향' -->
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.name,
    }
  },
  computed: {
    listItems() {
      if (this.name === 'news') {
          return this.$store.state.news;
      } else if (this.name === 'ask') {
          return this.$store.state.ask;
      } else if (this.name === 'jobs') {
          return this.$store.state.jobs;
      }
      return null;
    },
  },
  created() {
    if (this.name === 'news') {
        this.$store.dispatch('FETCH_NEWS');
    } else if (this.name === 'ask') {
        this.$store.dispatch('FETCH_ASK');
    } else if (this.name === 'jobs') {
        this.$store.dispatch('FETCH_JOBS');
    }
  }
}
</script>

<style scoped>
.item-list {
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
.item-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>