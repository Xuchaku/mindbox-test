import { Center, Heading } from "@chakra-ui/react";
import List from "./components/List/List";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Center>
        <Heading className={styles.head} fontWeight={"light"} size="4xl">
          todos
        </Heading>
      </Center>
      <List />
    </>
  );
}

export default App;
