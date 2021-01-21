import React, { useEffect, useState } from "react";
import { Input, Stack, IconButton } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";

export default function MessageForm({ handleSend }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("message :>> ", message);
  }, [message]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    return handleSend(message)
      .then((res) => {
        setMessage("");
      })
      .catch((error) => {});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <Input
          name="message"
          placeholder="Enter a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send"
          fontSize="20px"
          icon={<BiSend />}
          type="submit"
          disabled={!message}
          isLoading={false}
        />
      </Stack>
    </form>
  );
}
