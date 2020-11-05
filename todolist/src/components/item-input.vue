<template>
  <div class="form-group">
    <input
      type="text"
      class="form-control"
      v-model="title"
      @keyup.enter="addItem"
      placeholder="할일을 입력해주세요"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: mapState(["todoList"])
})
export default class Iteminput extends Vue {
  title = "";

  addItem() {
    console.log("--- addItem method ---");
    console.log("length : " + this.$store.state.todoList.length);

    this.$store.commit("addItem", {
      id: this.$store.state.todoList.length + 1,
      // id: this.todoList.length + 1,
      title: this.title,
      status: "active"
    });
  }
}
</script>

<style scoped></style>
