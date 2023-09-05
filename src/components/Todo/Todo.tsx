import { Box, HStack, Text } from "@chakra-ui/react";
import React, { memo } from "react";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

import { TodoProps } from "../../types/TodoProps";

function Todo({ todo, handleChange }: TodoProps) {
  const { completed, id, text } = todo;
  const styles = {
    as: completed ? "s" : "",
    color: completed ? "gray.200" : "",
  };

  return (
    <Box
      bg="white"
      w="100%"
      p={4}
      color="black"
      borderBottom={"1px solid #ccc"}
    >
      <HStack justify={"flex-start"}>
        <CustomCheckbox
          cheked={completed}
          handleChange={handleChange.bind(null, id)}
        />
        <Text fontWeight={"thin"} fontSize="3xl" {...styles}>
          {text}
        </Text>
      </HStack>
    </Box>
  );
}

export default memo(Todo);
