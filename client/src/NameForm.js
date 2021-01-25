import React, { useState } from "react";
import { Input, Stack, IconButton, Heading } from "@chakra-ui/react";
import { BiSave, BiEdit } from "react-icons/bi";

export default function NameForm({ username, setUsername }) {
  const [newUsername, setNewUsername] = useState(username);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUsername) return;
    // setUsername(newUsername);
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        {isEditing ? (
          <Input
            name="username"
            placeholder="Choose a username"
            onChange={(e) => setNewUsername(e.target.value)}
            value={newUsername}
            bg="gray.100"
            size="sm"
            border="none"
            onClick={() => setIsEditing(true)}
            onBlur={handleSubmit}
          />
        ) : (
          <span>
            Welcome{" "}
            <strong
              onClick={() => {
                setIsEditing(true);
              }}
            >
              {newUsername}
            </strong>
          </span>
        )}
        <IconButton
          size="sm"
          variant="outline"
          colorScheme="teal"
          aria-label="Save"
          fontSize="15px"
          icon={isEditing ? <BiSave /> : <BiEdit />}
          // type="submit"
          border="none"
          onClick={(e) => {
            console.log("clicked editing?", isEditing);
            if (isEditing) {
              handleSubmit(e);
            } else setIsEditing(true);
          }}
        />
      </Stack>
    </form>
  );
}
