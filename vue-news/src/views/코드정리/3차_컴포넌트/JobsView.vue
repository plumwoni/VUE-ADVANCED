<template>
  <div>
    <ul class="job-list">
      <li v-for="job in fetchedJobs" :key="job.id" class="post">
        <!--  포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="job-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>
.job-list {
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
.job-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>