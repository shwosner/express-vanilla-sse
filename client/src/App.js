import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Container,
  Image,
  GridItem,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import "./App.css";
import NameForm from "./NameForm";
function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const localName = localStorage.getItem("username");
    console.log("localName :>> ", localName);
    localName && setUsername(localName);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Grid minH="100vh" templateRows="min-content auto">
        <Grid templateColumns="1fr 1fr" justifyItems="center">
          <GridItem justifySelf="start" m="2">
            <Image src="/rchat_logo.png" height="60px" />
          </GridItem>
          <GridItem justifySelf="end" alignSelf="center" mr="5">
            <NameForm username={username} setUsername={setUsername} />
          </GridItem>
        </Grid>
        <Box bg="gray.100">
          <Container maxW="600px" mt="5">
            <Box
              bg="white"
              p="5"
              // height="md"
              height="28rem"
              overflow="auto"
              borderRadius="10px"
            >
              <Messages username={username} />
            </Box>
            <MessageForm username={username} />
          </Container>
        </Box>
      </Grid>
    </ChakraProvider>
  );
}

export default App;

{
  /* <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack> */
}
