const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TV Show Dashboard API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose.connect("mongodb://localhost:27017/tvshowdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("TV Show Dashboard API");
});

const tvSeriesRoutes = require("./routes/tvSeries");
app.use("/api/tvseries", tvSeriesRoutes);

const seasonRoutes = require("./routes/seasons");
app.use("/api/seasons", seasonRoutes);

const episodeRoutes = require("./routes/episodes");
app.use("/api/episodes", episodeRoutes);

const paymentRoutes = require("./routes/payments");
app.use("/api/payments", paymentRoutes);

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
