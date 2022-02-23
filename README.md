# Real-time Chat with SSE (Server Sent Events) with React

This is an example application which uses vanilla _Server Sent Events_ for real-time chat implementation without web sockets and long looping.
Client is built with **React and Chakra-UI**

# Install

Important note: This app can only run on node v14.15.4 or higher.

`npm install` to install server dependencies
`cd client && npm install` to install client dependencies

# Dev

`npm run dev` to run server on port 4000 and react client on port 3000 (concurrently)

Or `npm run server` and `npm run client` in two different terminals.

# Build

`npm run build` to build the react client

# production

`npm start` - this will start the Express server (without nodemon), and also serve the React client build.

# Example

!['example'](https://i.ibb.co/7SmCfXt/SSE.png 'example')
