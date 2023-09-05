import { memo } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

import CustomCheckbox from "../CustomCheckbox";

import { TodoProps } from "../../types/TodoProps";

function Todo({ todo, handleChange }: TodoProps) {
  const { completed, id, text } = todo;

  return (
    <Box
      bg={"white"}
      w={"100%"}
      p={4}
      color={"black"}
      borderBottom={"1px solid #ccc"}
    >
      <HStack justify={"flex-start"}>
        <CustomCheckbox
          cheked={completed}
          handleChange={handleChange.bind(null, id)}
        />
        <Text
          fontWeight={"thin"}
          fontSize={"3xl"}
          as={completed ? "s" : undefined}
          color={completed ? "gray.200" : undefined}
        >
          {text}
        </Text>
      </HStack>
    </Box>
  );
}

export default memo(Todo);
