import express from "express";
import { getRouter as programmingLanguagesRouter } from "./routes/programmingLanguages";

const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/programming-languages", programmingLanguagesRouter());
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log(process.env.NODE_ENV);
