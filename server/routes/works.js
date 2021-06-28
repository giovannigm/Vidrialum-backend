const express = require("express");
const multer = require("multer");

const verifyToken = require("../verifyToken");

const router = express.Router();

const PUBLIC_PATH = "server/public";

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, `${PUBLIC_PATH}/uploads`);
  },
  filename: (request, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}.png`);
  },
});

const upload = multer({ storage });

let workId = 1;
let works = [
  {
    id: 1,
    name: "Name",
    description: "Description",
    image: "/uploads/BTsbZSpnQ2aTkZ9s2giY8w.jpg-1624470923517.png",
  },
];

/**
 * @route GET /works
 * @desc Get all works
 * @access Public
 */
router.get("/", (request, response) => {
  response.status(200).json(works);
});

/**
 * @route GET /works/:id
 * @desc Get one work by id
 * @access Public
 */
router.get("/:id", (request, response) => {
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
 * @access Private
 */
router.post("/", upload.single("image"), verifyToken, (request, response) => {
  const newWork = {
    id: ++workId,
    ...request.body,
    image: request.file.path.slice(PUBLIC_PATH.length),
  };

  works.push(newWork);

  response.status(201).json(newWork);
});

/**
 * @route DELETE /works/:id
 * @desc Delete a work
 * @access Private
 */
router.delete("/:id", verifyToken, (request, response) => {
  const idParam = parseInt(request.params.id);
  const workIndex = works.findIndex((work) => work.id === idParam);

  if (workIndex !== -1) {
    const filteredWorks = works.filter((work) => work.id !== idParam);

    works = filteredWorks;

    response.status(200).json(works);
  } else {
    response.status(404).json("Not found");
  }
});

/**
 * @route PATCH /works/:id
 * @desc update a work
 * @access Private
 */
router.patch(
  "/:id",
  upload.single("image"),
  verifyToken,
  (request, response) => {
    const idParam = parseInt(request.params.id);
    const workIndex = works.findIndex((work) => work.id === idParam);

    if (workIndex !== -1) {
      works[workIndex] = {
        ...works[workIndex],
        ...request.body,
        image: request.file.path.slice(PUBLIC_PATH.length),
      };

      response.status(200).json(works);
    } else {
      response.status(404).json("Not found");
    }
  }
);

module.exports = router;
