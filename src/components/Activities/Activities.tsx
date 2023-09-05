import {
  Box,
  Button,
  Flex,
  Spacer,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { tabStyle } from "../../const";
import { Filter } from "../../types/Filter";

import { ActivitiesProps } from "../../types/ActivitiesProps";

export default function Activities({
  todos,
  setFilter,
  handleClear,
}: ActivitiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs: Filter[] = ["All", "Active", "Completed"];
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  function handleChange(index: number) {
    setActiveIndex(index);
    setFilter(tabs[index]);
  }
  console.log("rerre");

  return (
    <Flex p={4}>
      <Box>
        <Button fontWeight={"light"} colorScheme="brand" variant="ghost">
          {itemsLeft} items left
        </Button>
      </Box>
      <Spacer />
      <Box>
        <Tabs onChange={handleChange} variant={"unstyled"} index={activeIndex}>
          <TabList gap={4}>
            {tabs.map((tab) => {
              return (
                <Tab key={tab} fontWeight={"light"} p={1} _selected={tabStyle}>
                  {tab}
                </Tab>
              );
            })}
          </TabList>
        </Tabs>
      </Box>
      <Spacer />
      <Box>
        <Button
          fontWeight={"light"}
          colorScheme="brand"
          variant="ghost"
          onClick={handleClear}
        >
          Clear completed
        </Button>
      </Box>
    </Flex>
  );
}
