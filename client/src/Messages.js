import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AlwaysScrollToBottom from "./AlwaysScrollToBottom";
import Message from "./Message";

export default function Messages({ username }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("effect ran");
    if (!!window.EventSource) {
      console.log("connecting to source");
      var stream = new EventSource("http://localhost:4000/stream");

      stream.onopen = function () {
        console.log("Connection was opened");
      };
      stream.addEventListener(
        "connected",
        function (event) {
          console.log("connected event:", event.data);
          const data = JSON.parse(event.data);
          setMessages(data);
        },
        false
      );
      stream.addEventListener("new_message", function (event) {
        const data = JSON.parse(event.data);
        console.log("new_message event:", data);
        setMessages(data);
      });
      stream.onmessage = function (event) {
        const data = JSON.parse(event.data);
        console.log("message event:", data);
        setMessages(data);
      };

      stream.onerror = function (error) {
        console.log("Stream error:", error);
        if (error.currentTarget.readyState === 0) {
          console.log("Connection was closed");
        }
      };
    }
    return () => {
      stream && stream.close();
      console.log("Connection was closed by useEffect unmount");
    };
  }, []);
  if (messages.length) {
    return messages.map((message, index) => {
      const isYou = message.username === username;
      return (
        <>
          <Message key={index} message={message} isYou={isYou} />
          <AlwaysScrollToBottom />
        </>
      );
    });
  }
  return "No messages";
  // return (
  //   <Box
  //     // mt="4"
  //     bg="white"
  //     p="5"
  //     // height="md"
  //     // height="26rem"
  //     // height="100%"
  //     overflow="auto"
  //     borderRadius="10px"
  //   >
  //     {messages.length
  //       ? messages.map((message, index) => {
  //           const isYou = message.username === username;
  //           return <Message key={index} message={message} isYou={isYou} />;
  //         })
  //       : "No messages"}
  //     <AlwaysScrollToBottom />
  //   </Box>
  // );
}
