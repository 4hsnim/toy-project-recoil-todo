import { atom } from "recoil";

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});

export default todoListFilterState;
