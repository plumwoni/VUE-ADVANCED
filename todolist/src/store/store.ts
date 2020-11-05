import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Item, StateIf } from "./store.interface";

Vue.use(Vuex);

const store: StoreOptions<StateIf> = {
  state: {
    todoList: [
      { id: 0, title: "test", status: "active" },
      { id: 1, title: "test1", status: "active" },
      { id: 2, title: "test2", status: "clear" }
    ]
  },
  mutations: {
    // TODO add
    addItem(state, item: Item) {
      state.todoList.push(item);
    },
    // TODO change status
    changeStatus(
      state,
      { id, status }: { id: number; status: "active" | "clear" }
    ) {
      console.log("==== changeStatus ====");
      console.log("id : " + id);
      console.log("status : " + status);
      console.log("before :: " + state.todoList[id]);
      state.todoList[id].status = status;
      console.log(state.todoList[id]);
    },
    // TODO remove
    removeItem(state, id: number) {
      console.log("==== removeItem ====");
      console.log("id : " + id);
      state.todoList.splice(id, 1);
    }
  },
  actions: {},
  getters: {
    allTodoList: state => state.todoList,
    activeTodoList: state => {
      console.log("activeTodoList start :: state : ");
      console.log(state);
      return state.todoList.filter((item: Item) => {
        console.log(
          "==> inner :: id : " + item.id + ", status : " + item.status
        );
        return item.status === "active";
      });
    },
    clearTodoList: state => {
      return state.todoList
        .slice()
        .filter((item: Item) => item.status === "clear");
    }
  },
  modules: {}
};

export default new Vuex.Store(store);
