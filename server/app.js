const express = require("express");
const path = require("path");
const cors = require("cors");

const worksRoutes = require("./routes/works");
const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contact");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);
app.use("/works", worksRoutes);
app.use("/contact", contactRoutes);

app.get("/", (request, response) => response.send("VIDRIALUM"));

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
