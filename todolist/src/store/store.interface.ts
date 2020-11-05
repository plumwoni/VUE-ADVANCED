export interface Item {
  id: number;
  title: string;
  status: "active" | "clear";
}

export interface StateIf {
  todoList: Item[];
}
