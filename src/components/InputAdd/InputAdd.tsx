import { ChangeEvent, KeyboardEvent, memo, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Box } from "@chakra-ui/react";

import { InputAddProps } from "../../types/InputAddProps";

function InputAdd({ handleSubmit }: InputAddProps) {
  const [text, setText] = useState("");
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  function handleCheckSubmit(event: KeyboardEvent) {
    if (event.code == "Enter" && text !== "") {
      handleSubmit(text);
      setText("");
    }
  }

  return (
    <Box p={4} borderBottom={"1px solid #ccc"}>
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <ChevronDownIcon boxSize={10} color={"gray.300"} />
        </InputLeftElement>
        <Input
          value={text}
          variant={"unstyled"}
          ml={5}
          fontSize={32}
          placeholder={"What needs to be done?"}
          border={"none"}
          _placeholder={{ color: "gray.200" }}
          color={"gray.400"}
          onChange={handleChange}
          onKeyDown={handleCheckSubmit}
        />
      </InputGroup>
    </Box>
  );
}

export default memo(InputAdd);
