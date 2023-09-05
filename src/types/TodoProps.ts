import { Task } from "./Task";

export type TodoProps = {
  todo: Task;
  handleChange: (id: number) => void;
};
