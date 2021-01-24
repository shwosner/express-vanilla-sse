import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import dayjs from "dayjs";
// import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export default function Message({ message, currentUser = "bot" }) {
  const isYou = message.userName === currentUser;
  const messageStyle = {
    isYou: "",
  };
  return (
    <Box display="grid" justifyItems={isYou ? "end" : "start"}>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        // gap={6}
        w="80%"
        // h="10"
        px="3"
        py="2"
        bg="white"
        mb="5"
        position="relative"
        _after={{
          position: "absolute",
          content: "''",
          width: 0,
          height: 0,
          borderStyle: "solid",
          // borderWidth: "0px 10px 10px 0",
          borderWidth: "0px 0px 10px 10px",
          borderColor: "transparent #fff transparent transparent",
          top: 0,
          // left: "-10px",
          right: "-10px",
        }}
      >
        <GridItem
          fontWeight="500"
          fontSize="md"
          justifySelf="start"
          colSpan={2}
          color="gray.500"
          mb="2"
        >
          {isYou ? "You" : message.userName}
        </GridItem>
        <GridItem justifySelf="start" fontSize="md">
          {message.text}
        </GridItem>
        <GridItem fontSize="sm" justifySelf="end">
          {/* {dayjs(message.timestamp).fromNow()} */}
          {new Date(message.timestamp).toLocaleTimeString()}
        </GridItem>
      </Grid>
    </Box>
  );
}
