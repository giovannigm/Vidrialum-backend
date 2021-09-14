const express = require("express");
const multer = require("multer");

const verifyToken = require("../verifyToken");
const db = require("../db");

const router = express.Router();

const PATH = "server";

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, `${PATH}/uploads`);
  },
  filename: (request, file, cb) => {
    cb(null, `${file.originalname}-${Date.now()}.png`);
  },
});

const upload = multer({ storage });

/**
 * @route GET /works
 * @desc Get all works
 * @access Public
 */
router.get("/", async (request, response) => {
  const result = await db.query("SELECT * FROM works");

  response.status(200).json(result.rows);
});

/**
 * @route GET /works/:id
 * @desc Get one work by id
 * @access Public
 */
router.get("/:id", async (request, response) => {
  const idParam = parseInt(request.params.id);

  const result = await db.query("SELECT * FROM works WHERE id=$1", [idParam]);

  const workFound = result.rows[0];

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
router.post(
  "/",
  upload.single("image"),
  verifyToken,
  async (request, response) => {
    await db.query("INSERT INTO works(name, image) VALUES ($1, $2)", [
      request.body.name,
      request.file.path.slice(PATH.length),
    ]);

    response.status(201).json("Created successfully");
  }
);

/**
 * @route DELETE /works/:id
 * @desc Delete a work
 * @access Private
 */
router.delete("/:id", verifyToken, async (request, response) => {
  const idParam = parseInt(request.params.id);

  await db.query("DELETE FROM works WHERE id=$1", [idParam]);

  response.status(200).json("Deleted successfully");
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
  async (request, response) => {
    const idParam = parseInt(request.params.id);

    await db.query("UPDATE works SET name=$1, image=$2 WHERE id=$3", [
      request.body.name,
      request.file.path.slice(PATH.length),
      idParam,
    ]);

    response.status(200).json("Updated successfully");
  }
);

module.exports = router;
