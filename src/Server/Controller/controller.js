const database = require("../Database/connection");
const post = async (req, res) => {
  const { name, company, email } = req.body;
  try {
    await database.awaitQuery(
      "INSERT INTO contact (name, company, email) VALUES (?, ? , ?)",
      [name, company, email]
    );
    res.status(201).json("Mensaje recibido en la base de datos.");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  post,
};
