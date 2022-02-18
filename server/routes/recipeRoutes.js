const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

/**
 * app routes
 * */

router.get("/", recipeController.homepage);

module.exports = router;
