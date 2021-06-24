const express = require("express");
const path = require("path");
const multer = require('multer');

const PUBLIC_PATH = 'server/public';

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, `${PUBLIC_PATH}/uploads`);
  },
  filename: (request, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}.png`);
  },
});

const upload = multer({ storage });

const app = express();
const port = 3000;


let workId = 1;
let works = [
  {
    id: 1,
    name: "Name",
    description: "Description",
    image: "/uploads/BTsbZSpnQ2aTkZ9s2giY8w.jpg-1624470923517.png",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

/**
 * @route GET /works
 * @desc Get all works
 * @access Public
 */
app.get("/works", (request, response) => {
  response.status(200).json(works);
});

/**
 * @route GET /works/:id
 * @desc Get one work by id
 * @access Public
 */
app.get("/works/:id", (request, response) => {
  const idParam = parseInt(request.params.id);
  const workFound = works.find((work) => work.id === idParam);

  if (workFound) {
    response.status(200).json(workFound);
  } else {
    response.status(404).json("Not found");
  }
});

/**
 * @route POST /works
 * @desc Crete a new work
 * @access Public
 */
app.post("/works", upload.single('image'), (request, response) => {
  const newWork = { id: ++workId, ...request.body, image: request.file.path.slice(PUBLIC_PATH.length) };

  works.push(newWork);
  

  response.status(201).json(newWork);

});

/**
 * @route DELETE /works/:id
 * @desc Delete a work
 * @access Public
 */
app.delete("/works/:id", (request, response) => {
  const idParam = parseInt(request.params.id);

  const filteredWorks = works.filter((work) => work.id !== idParam);

  works = filteredWorks;

  response.status(200).json(works);
});

/**
 * @route PATCH /works/:id
 * @desc update a work
 * @access Public
 */
app.patch("/works/:id", (request, response) => {
  const idParam = parseInt(request.params.id);
  const workIndex = works.findIndex((work) => work.id === idParam);

  works[workIndex] = { ...works[workIndex], ...request.body };

  response.status(200).json(works);
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
