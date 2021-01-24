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
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import MessageForm from "./MessageForm";
import Messages from "./Messages";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Container boxSize="lg">
            <Messages />
            <MessageForm />
          </Container>
          {/* <VStack spacing={8}>
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
          </VStack> */}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
