const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();

const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});
const taskRoutes = require("./routes/task.routes");

app.use("/api/v1/tasks", taskRoutes);

module.exports = app;
