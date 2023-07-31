const fs = require("fs");
const { db, Pokemon, Trainer } = require("./server/db");

const seed = async () => {
  try {
    await db.sync({ force: true });

    // Create Trainers
    const trainers = await Trainer.bulkCreate([
      {
        firstName: "Ash",
        lastName: "Ketchum",
        image: "https://www.giantbomb.com/images/1300-1916198",
      },
      {
        firstName: "Misty",
        lastName: "",
        image: "https://www.giantbomb.com/images/1300-789440",
      },
      {
        firstName: "Brock",
        lastName: "Harrison",
        image: "https://www.giantbomb.com/images/1300-1046359",
      },
    ]);

    // Create Pokemon associated with each Trainer
    const pokemon = await Pokemon.bulkCreate([
      {
        name: "Pikachu",
        type: "Electric",
        trainerId: trainers[0].id,
        date: "2023-07-19",
        image: "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
      },
      {
        name: "Charizard",
        type: "Fire/Flying",
        trainerId: trainers[0].id,
        date: "2023-07-19",
        image: "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
      },
      {
        name: "Bulbasaur",
        type: "Grass/Poison",
        trainerId: trainers[0].id,
        date: "2023-07-19",
        image: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
      },
      {
        name: "Jigglypuff",
        type: "Normal/Fairy",
        trainerId: trainers[1].id,
        date: "2023-07-19",
        image: "https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png",
      },
      {
        name: "Gengar",
        type: "Ghost/Poison",
        trainerId: trainers[2].id,
        date: "2023-07-19",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      },
    ]);
    db.close();

    console.log(`
      Seeding successful! Pokedex is ready.
    `);
  } catch (err) {
    db.close();
    console.error(`
      Error seeding:

      ${err.message}

      ${err.stack}
    `);
  }
};

seed();
