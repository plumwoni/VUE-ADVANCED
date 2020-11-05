<template>
  <div>
    <item
      v-for="item in renderList"
      v-bind:key="item.id"
      :id="item.id"
      :title="item.title"
      :status="item.status"
    ></item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import item from "@/components/item.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    item
  },
  computed: {
    ...mapGetters(["allTodoList", "activeTodoList", "clearTodoList"])
  }
})
export default class ItemList extends Vue {
  renderList!: any[];

  created() {
    console.log("URL param : " + this.$route.params.status);
    this.initRenderList(this.$route.params.status);
  }

  initRenderList(status: string) {
    if (!status) {
      this.renderList = this.$store.getters.allTodoList;
      // this.renderList = this.allTodoList;
    } else if (status === "active") {
      console.log("active rendering start");
      this.renderList = this.$store.getters.activeTodoList;
    } else if (status === "clear") {
      this.renderList = this.$store.getters.clearTodoList;
    }
  }

  @Watch("$route.params.status")
  routeUpdate(newValue: string) {
    console.log("====================  routeUpdate  ======================");
    console.log("newValue : " + newValue);
    this.initRenderList(newValue);
  }

  @Watch("$store.state.todoList", { deep: true })
  routeUpdateByList() {
    console.log(
      "====================  routeUpdateByList  ======================"
    );
    console.log("newValue : " + this.$route.params.status);
    this.initRenderList(this.$route.params.status);
  }
}
</script>

<style scoped></style>
