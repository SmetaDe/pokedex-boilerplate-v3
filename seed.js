const fs = require("fs");
const { db, Pokemon, Trainer } = require("./server/db");

const seed = async () => {
  await db.sync({ force: true });
    // Create Trainers

const ash = await Trainer.create({
      firstName: "Ash",
      lastName: "Ketchum",
      image: "https://www.giantbomb.com/images/1300-1916198",
    });

const brock = await Trainer.create({
      firstName: "Brock",
      lastName: "Harrison",
      image: "https://www.giantbomb.com/images/1300-1906767",
    });

const misty = await Trainer.create({
      firstName: "Misty",
      lastName: "",
      image: "https://www.giantbomb.com/images/1300-1881200",
    });

    // Create Pokemon

    const pikachu = await Pokemon.create({
      name: "Pikachu",
      type: "Electric",
      trainer: ash.id,
      date: "2023-07-19",
      image: "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
      TrainerId: 1,
    });

    const charizard = await Pokemon.create({
      name: "Charizard",
      type: "Fire/Flying",
      trainer: ash.id,
      date: "2023-07-19",
      image: "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
      TrainerId: 1,
    });

    const bulbasaur = await Pokemon.create({
      name: "Bulbasaur",
      type: "Grass/Poison",
      trainer: ash.id,
      date: "2023-07-19",
      image: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
      TrainerId: 1,
    });

    const squirtle = await Pokemon.create({
      name: "Squirtle",
      type: "Water",
      trainer: ash.id,
      date: "2023-07-19",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      TrainerId: 1,
    });

    const jigglypuff = await Pokemon.create({
      name: "Jigglypuff",
      type: "Normal/Fairy",
      trainer: misty.id,
      date: "2023-07-19",
      image: "https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png",
      TrainerId: 2,
    });

    const gengar = await Pokemon.create({
      name: "Gengar",
      type: "Ghost/Poison",
      trainer: brock.id,
      date: "2023-07-19",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      TrainerId: 3,
    });
    
  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});