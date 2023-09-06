import { useCallback, useMemo, useState } from "react";
import { Box, Container, VStack } from "@chakra-ui/react";

import Activities from "../Activities";
import Todo from "../Todo";
import InputAdd from "../InputAdd";

import { Filter } from "../../types/Filter";
import { Task } from "../../types/Task";

import styles from "./List.module.scss";

export default function List({ initTodos }: { initTodos: Task[] }) {
  const [todos, setTodos] = useState<Task[]>(initTodos);
  const [filter, setFilter] = useState<Filter>("All");

  const memoChangeTodoCheck = useCallback((id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }, []);

  const addTodo = (text: string) => {
    const newTask: Task = {
      text,
      id: todos[todos.length - 1].id + 1,
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

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
      <InputAdd handleSubmit={addTodo} />
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
      <Box
        className={styles.firstShadow}
        w={"99%"}
        height={2}
        bgColor={"white"}
      ></Box>
      <Box
        className={styles.secondShadow}
        w={"98%"}
        height={2}
        bgColor={"white"}
      ></Box>
    </Container>
  );
}
