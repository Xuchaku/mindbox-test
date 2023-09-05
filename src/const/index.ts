import { Task } from "../types/Task";

export const tabStyle = { border: "1px solid #ccc", borderRadius: "4px" };
export const TODOS_MOCK: Task[] = [
  { completed: false, text: "Тестовое задание", id: 1 },
  { completed: true, text: "Прекрасный код", id: 2 },
  { completed: false, text: "Покрытие тестами", id: 3 },
];
