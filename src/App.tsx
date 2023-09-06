import { Alert, AlertIcon, Center, Heading, Stack } from "@chakra-ui/react";
import List from "./components/List";
import styles from "./App.module.scss";
import { TODOS_MOCK } from "./const";

function App() {
  return (
    <>
      <Stack spacing={3} w={500}>
        <Alert status="info">
          <AlertIcon />
          Добавление новой задачи осуществляется при вводе в input и нажатии
          Enter
        </Alert>
      </Stack>
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
