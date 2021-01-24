import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Grid,
  theme,
  Input,
  Button,
  Container,
  Image,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import "./App.css";
function App() {
  return (
    <ChakraProvider
    // theme={theme}
    >
      <Box textAlign="center" bg="gray.100">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Container maxW="600px">
            <Grid justifyContent="center">
              <Image src="/rchat_logo.png" width="100px" />
            </Grid>
            <Messages />
            <MessageForm />
          </Container>
        </Grid>
      </Box>
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
