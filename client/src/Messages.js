import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Message from "./Message";

export default function Messages() {
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
  return (
    <Box mt="30" mb="10" bg="gray.100" p="5" height="sm" overflow="auto">
      {messages.length
        ? messages.map((message, index) => (
            <Message key={index} message={message} />
          ))
        : "No messages"}
    </Box>
  );
}
