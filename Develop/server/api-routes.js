const express = require("express");
const router = express.Router();
const fs = require("fs");
const { networkInterfaces } = require("os");

// get test - /api
router.get("/api", (req, res) => {
  res.json({ msg: "This api works." });
});

// get notes from db.json - /api/notes
router.get("/api/notes", (req, res) => {
  let data = fs.readFileSync("db.json", "utf8");
  // res.json({ msg: "This api works." });
  data = JSON.parse(data);
  let dbJsonVal = JSON.stringify(data, null, 2);
  // console.log(dbJsonVal);
  res.json(dbJsonVal);
  //fs.writeFileSync("db.json", JSON.stringify(file));
});

// post new notes to saved notes using - /api/notes
router.post("/api/notes", (req, res) => {
  let data = fs.readFileSync("db.json", "utf8");
  data = JSON.parse(data);
  let newNotes = req.body;
  newNotes.id = data.length + 1;
  console.log(newNotes);
  data.push(newNotes);
  fs.writeFile("db.json", JSON.stringify(data, null, 2));
  res.json(data);
});

// delete notes with a unique id - /api/notes/:id
// router.delete("/api/notes/:id", (req, res) => {
//   res.send(req.params);
// });

module.exports = router;
