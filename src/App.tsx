import { Center, Heading } from "@chakra-ui/react";
import List from "./components/List";
import styles from "./App.module.scss";
import { TODOS_MOCK } from "./const";

function App() {
  return (
    <>
      <Center>
        <Heading className={styles.head} fontWeight={"light"} size="4xl">
          todos
        </Heading>
      </Center>
      <List initTodos={TODOS_MOCK} />
    </>
  );
}

export default App;
