<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then( response => {
        this.response = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
      }) 
  },
  render() {
    // 컴포넌트를 그릴 때, 데이터만 노출할 수 있도록 해주는 게 $scopedSlots 임
    return this.$scopedSlots.default ({
      response: this.response,
      loading: this.loading,
    });
  }
}
</script>