import express from "express";

const app = express();

app.get("/ping", (_request, response) => {
  response.send("pong");
});

const PORT = 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
