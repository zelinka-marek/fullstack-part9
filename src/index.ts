import express from "express";
import { calculator, type Operation } from "./calculator";

const app = express();
const port = 3003;

app.use(express.json());

app.get("/ping", (_request, response) => {
  response.send("pong");
});

app.post("/calculate", (request, response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = request.body;
  if (!value1 || isNaN(Number(value1))) {
    return response.status(400).json({ error: "value1 must be a number" });
  }
  if (!value2 || isNaN(Number(value2))) {
    return response.status(400).json({ error: "value2 must be a number" });
  }
  if (
    !op ||
    typeof op !== "string" ||
    !["multiply", "add", "divide"].includes(op)
  ) {
    return response.status(400).json({ error: "invalid op" });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op as Operation);
  return response.json(result);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
