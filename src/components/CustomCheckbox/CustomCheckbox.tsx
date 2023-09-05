import { Flex, chakra, useCheckbox } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import React from "react";
import { CustomCheckboxProps } from "../../types/CustomCheckboxProps";

export default function CustomCheckbox({
  cheked,
  handleChange,
}: CustomCheckboxProps) {
  const { getCheckboxProps, getInputProps } = useCheckbox();

  return (
    <chakra.label cursor="pointer">
      <input
        {...getInputProps()}
        hidden
        checked={cheked}
        onChange={handleChange}
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="#ccc"
        w={8}
        h={8}
        borderRadius={"100%"}
        {...getCheckboxProps()}
      >
        {cheked && <CheckIcon color={"green"} />}
      </Flex>
    </chakra.label>
  );
}
