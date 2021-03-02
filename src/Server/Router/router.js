const { Router } = require("express");
const { post } = require("../Controller/controller");

const router = Router();
router.post("/contact", post);
module.exports = router;
