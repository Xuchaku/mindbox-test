import { Filter } from "./Filter";
import { Task } from "./Task";

export type ActivitiesProps = {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  todos: Task[];
  handleClear: () => void;
};
