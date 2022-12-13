import Express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/index.routes";
import connectDB from "./database/connect";

dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json());

const port = process.env.PORT || 5000;

app.use("/api/v1", router);

try {
  connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
