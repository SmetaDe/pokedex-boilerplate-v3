const router = require("express").Router();
const { db } = require("../db");
const { Pokemon, Trainer } = require('../db/index');
// Connect your API routes here!

// Route to get all Pokemon
router.get("/pokemon", async (req, res, next) => {
    try {
        const allPokemon = await Pokemon.findAll({ include: Trainer });
        res.json(allPokemon);
    } catch (err) {
        next(err);
    }
});

// Route to get a single pokemon (based on its id), including the pokemon's trainer
router.get('/pokemon/:id', async (req, res, next) => {
    try {
        const onePokemon = await Pokemon.findByPk(req.params.id, { include: Trainer });
        if (onePokemon) {
            res.json(onePokemon);
        } else {
            res.status(404).json({ message: 'Pokemon not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Route to add a new pokemon
router.post('/pokemon', async (req, res, next) => {
    try {
        // Add validation for req.body here if needed
        const addPokemon = await Pokemon.create(req.body);
        res.status(201).json(addPokemon);
    } catch (err) {
        next(err);
    }
});

// Route to remove a pokemon (based on its id)
router.delete('/pokemon/:id', async (req, res, next) => {
    try {
        const deletePokemon = await Pokemon.destroy({ where: { id: req.params.id } });
        if (deletePokemon === 1) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Pokemon not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Route to update an existing pokemon
router.put('/pokemon/:id', async (req, res, next) => {
    try {
        // Add validation for req.body here if needed
        const [updatedRowsCount, updatedPokemon] = await Pokemon.update(req.body, {
            where: { id: req.params.id },
            returning: true,
        });
        if (updatedRowsCount === 1) {
            res.json(updatedPokemon[0]);
        } else {
            res.status(404).json({ message: 'Pokemon not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Route to get all trainers
router.get("/trainers", async (req, res, next) => {
    try {
        const allTrainers = await Trainer.findAll({ include: Pokemon });
        res.json(allTrainers);
    } catch (err) {
        next(err);
    }
});

// Route to get a single trainer (based on their id), including that trainer's pokemon
router.get('/trainers/:id', async (req, res, next) => {
    try {
        const oneTrainer = await Trainer.findByPk(req.params.id, { include: Pokemon });
        if (oneTrainer) {
            res.json(oneTrainer);
        } else {
            res.status(404).json({ message: 'Trainer not found' });
        }
    } catch (err) {
        next(err);
    }
});

// Route to add a new trainer
router.post('/trainers', async (req, res, next) => {
    try {
        // Add validation for req.body here if needed
        const addTrainer = await Trainer.create(req.body);
        res.status(201).json(addTrainer);
    } catch (err) {
        next(err);
    }
});

// Route to remove a trainer (based on its id)
router.delete('/trainers/:id', async (req, res, next) => {
    try {
        const deleteTrainer = await Trainer.destroy({ where: { id: req.params.id } });
        if (deleteTrainer === 1) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Trainer not found' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
