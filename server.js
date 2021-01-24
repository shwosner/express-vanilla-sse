import express from "express";
import compression from "compression";
import path from "path";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(compression());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(cors());
// Serve any static files
app.use(express.static(path.join(process.cwd(), "client/build")));
let connectionId = 0;
let connections = 0;

const messages = [
  { text: "Message one", timestamp: Date.now() - 5000, userName: "bot" },
  { text: "Message nubber two", timestamp: Date.now(), userName: "bot2" },
  {
    text: "Message nubber two klhbblkjhkujyvytcjycjycytccytc",
    timestamp: Date.now(),
    userName: "bot2",
  },
];

app.get("/stream", (req, res, next) => {
  // connections.push(res);
  if (connections === 10) {
    console.log(
      "Max 10 connections, (Use emitter.setMaxListeners() to increase limit)"
    );
    return res.status(500).send("Max 10 clients on the same time :-(");
  }
  connectionId++;
  connections++;
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  });
  console.log(`client ${connectionId} connected to SSE`);
  // console.log("connections :>> ", connections);
  res.write(`event: connected\n`);
  console.log(`Currently ${connections} connections`);

  res.status(200).write(`event: connected\n`);
  res.status(200).write(`data: ${JSON.stringify(messages)}\n\n`);
  res.flush();

  app.on("new_message_arrived", () => {
    // console.log("data :>> ", data);
    res.write(`event: new_message\n`);
    res.write(`data: ${JSON.stringify(messages)}\n\n`);
    res.flush();
  });

  req.on("close", () => {
    console.log("client closed,");
    connections--;
    console.log(`Currently ${connections} connections`);
  });
});

app.post("/new_message", (req, res) => {
  console.log("req.body :>> ", req.body);
  const { text, userName } = req.body;
  messages.push({ text, userName, timestamp: Date.now() });

  app.emit("new_message_arrived");
  res.status(200).json({ message: "Success" }).end();
});
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "client/build/index.html"));
});
app.listen(process.env.PORT || 4000, function () {
  console.log("Example app listening on port 4000!");
});
