const router = require("express").Router();
const { Pokemon, Trainer } = require("../db");

// Connect your API routes here!

router.get("/Pokemon", async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findAll();
    res.send(pokemon);
  } catch (err) {
    next(err);
  }
});

router.get("/Pokemon/:id", async (req, res, next) => {
     try {
     const pokemon = await Pokemon.findOne({
         where: { id: req.params.id },
         attributes: ["id", "name", "type", "image", "createdAt"], 
     });
    
       console.log(pokemon);
    
       res.send(pokemon);
     } catch (err) {
       next(err);
     }
 });

router.get("/trainer", async (req, res, next) => {
  try {
    const pokemon = await Trainer.findAll();
    res.send(pokemon);
  } catch (err) {
    next(err);
  }
});

router.get("/trainer/:id", async (req, res, next) => {
       try {
          const trainer = await Trainer.findOne({
            where: { id: req.params.id },
            attributes: ["id", "firstName", "lastName", "image", "createdAt"],
            include: [{ model: Pokemon, attributes: ["id", "name", "type", "image"] }],
        });

        if (!trainer) {
          console.log(`Trainer with id ${req.params.id} not found.`);
          return res.status(404).send("Trainer not found.");
        }
    
        console.log(trainer);
    
        res.send(trainer);
      } catch (err) {
        next(err);
      }
  });

module.exports = router;