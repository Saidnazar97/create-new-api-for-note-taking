const express = require("express");
const router = express.Router();
const fs = require("fs");

// get test - /api
router.get("/api", (req, res) => {
  res.json({ msg: "This api works." });
});

// get notes from db.json - /api/notes
router.get("/api/notes", (req, res) => {
  let notesData = req.body;
  let file = fs.readFileSync("db.json", "utf8");
});

// post new notes to saved notes - /api/notes
router.post("/api/notes", (req, res) => {
  let notesData = req.body;
  let file = fs.readFileSync("db.json", "utf8");
  file = JSON.parse(file);
  file.notes.push(notesData);
  fs.writeFileSync("db.json", JSON.stringify(file));
});

// delete notes with a unique id - /api/notes/:id
router.delete("/api/notes/:", (req, res) => {
  let notesData = req.body;
  let file = fs.readFileSync("db.json", "utf8");
  // find notes with unquie id
});

module.exports = router;
