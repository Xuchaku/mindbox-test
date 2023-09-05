import { Container, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";

import styles from "./List.module.scss";
import Activities from "../Activities/Activities";
import { TODOS_MOCK } from "../../const";
import { Task } from "../../types/Task";
import Todo from "../Todo/Todo";
import { Filter } from "../../types/Filter";
import InputAdd from "../InputAdd/InputAdd";

export default function List() {
  const [todos, setTodos] = useState<Task[]>(TODOS_MOCK);
  const [filter, setFilter] = useState<Filter>("All");

  const memoChangeTodoCheck = useCallback((id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }, []);

  const memoAddTodo = useCallback((text: string) => {
    const newTask: Task = { text, id: todos.length + 1, completed: false };
    setTodos([...todos, newTask]);
  }, []);

  function clearTodos() {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => !todo.completed);
    });
  }

  const filteredTodos = useMemo(() => {
    if (filter === "All") {
      return todos;
    } else if (filter === "Active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  }, [todos, filter]);

  return (
    <Container maxW="2xl" className={styles.list} p={0}>
      <InputAdd handleSubmit={memoAddTodo} />
      <VStack align="stretch" spacing={0}>
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleChange={memoChangeTodoCheck}
            />
          );
        })}
      </VStack>
      <Activities
        todos={todos}
        setFilter={setFilter}
        handleClear={clearTodos}
      />
    </Container>
  );
}
