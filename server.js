import express from "express";
import compression from "compression";
import path from "path";
const app = express();

app.use(express.json());
app.use(compression());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
// Serve any static files
app.use(express.static(path.join(process.cwd(), "client/build")));
let connectionId = 0;
let connections = 0;

const messages = [{ message: "message1", id: Date.now() }];

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
  });
  console.log(`client ${connectionId} connected to SSE`);
  // console.log("connections :>> ", connections);
  res.write(`event: connected\n`);
  console.log(`Currently ${connections} connections`);

  res.status(200).write(`data: Connected to stream\n\n`);
  res.flush();

  // setInterval(function () {
  //   if (localVersion < globalVersion) {
  //     console.log("sending stream");
  //     res.status(200).write(`data: ${JSON.stringify(messages)}\n\n`);
  //     localVersion = globalVersion;
  //     res.flush();
  //   }
  // }, 100);

  app.on("message", (data) => {
    // console.log("data :>> ", data);
    res.write(`event: message\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
    res.flush();
  });

  req.on("close", () => {
    console.log("client closed,");
    connections--;
    console.log(`Currently ${connections} connections`);
  });
});

app.post("/add_message", (req, res) => {
  // console.log("req.body :>> ", req.body);
  const { message } = req.body;
  messages.push({ message, id: Date.now() });

  app.emit("message", {
    title: "New message!",
    message,
    messages,
    timestamp: new Date(),
  });
  res.status(200).json({ message: "Success" }).end();
});
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "client/build/index.html"));
});
app.listen(process.env.PORT || 4000, function () {
  console.log("Example app listening on port 4000!");
});
