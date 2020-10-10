const express = require("express");

const favoritesController = require("../../controllers/v1/favorites-controller");

const router = express.Router();
router.post("/create", favoritesController.createFavorites);
router.get("/get-favorites", favoritesController.getFavorites);

module.exports = router;
