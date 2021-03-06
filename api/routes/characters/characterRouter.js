const express = require("express");
const router = express.Router();

const Character = require("./characterModel");
const { listCharacters, getCharacterById } = require("./characterService");

router.route('/')
    .get(async (req, res) => {
        try {
          const characters = await listCharacters();
          res.json({ data: characters });
        } catch (ex) {
          console.log(ex);
          res.status(500).json({ message: "internal server error" });
        }
    })

router.route('/:id')
  .get(async (req, res) => {
    try {
      const { params } = req;
      const character = await getCharacterById(params.id.toUpperCase());
      res.json({ data: character });
    } catch (ex) {
      console.log(ex);
      res.status(500).json({ message: "internal server error" });
    }
  })    

exports.router = router;