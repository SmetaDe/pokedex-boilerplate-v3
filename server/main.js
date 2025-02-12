const PORT = 1337;
const server = require("./index");
const { db } = require("./db");

const init = async () => {
  try {
    // await db.sync();
    server.listen(PORT, () => {
      console.log(`
        Listening on port ${PORT}
        http://localhost:${PORT}/
      `);
    });
  } catch (err) {
    console.error("There was an error starting up!", err);
  }
};

init();
