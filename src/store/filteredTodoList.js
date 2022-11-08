import { selector } from "recoil";

import todoListFilterState from "./todoListFilter";
import todoListState from "./todoList";

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((listItem) => listItem.isComplete);
      case "Show Uncompleted":
        return list.filter((listItem) => !listItem.isComplete);
      default:
        return list;
    }
  },
});

export default filteredTodoListState;
