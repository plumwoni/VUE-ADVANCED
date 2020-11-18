<template>
  <fetch-data url="https://jsonplaceholder.typicode.com/users/1">

    <!-- slot-scope 안에서만 response, loadning 이 접근이 가능함 -->
    <div slot-scope="{ response, loading }">
      <div v-if="!loading">
        <!-- {{ response }} -->
        <p>name : {{ response.name }}</p>
        <p>email : {{ response.email }}</p>
      </div>
      <div v-if="loading">
        Loading...
      </div>
    </div>
  </fetch-data>  
</template>

<script>
import FetchData from './components/FetchData.vue';

export default {
  name: 'app',
  components: {
    FetchData,
  }
}
</script>

<style>

</style>