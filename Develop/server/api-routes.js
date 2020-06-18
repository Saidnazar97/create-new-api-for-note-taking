const express = require("express");
const router = express.Router();
const fs = require("fs");
const { networkInterfaces } = require("os");
const { notEqual } = require("assert");

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
  //convert num to string
  console.log(newNotes);
  data.push(newNotes);
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.json(data);
});

// delete notes with a unique id - /api/notes/:id
router.delete("/api/notes/:id", (req, res) => {
  // Get id from request
  let id = req.params.id;
  console.log("id=" + id);

  // Get all notes from database
  let data = fs.readFileSync("db.json", "utf8");

  // Convert to array so I can loop through
  data = JSON.parse(data);

  // Looping (aka iterating) through array and
  // find the item to remove.
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      console.log("Found it! data=" + data);
      data.splice(i, 1);
    }
  }
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

  // Send response
  res.json(data);
});

module.exports = router;
