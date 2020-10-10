const e = require("express");
const Favorites = require("../../mongo/models/favorites");

const createFavorites = async (req, res) => {
  try {
    console.log("req.boy", req.body);
    const { Title, Year, imdbID, Type, Poster, favorite } = req.body;
    await Favorites.create({
      Title,
      Year,
      imdbID,
      Type,
      Poster,
      favorite,
    });

    res.send({ status: "ok", message: "Favorites created" });
  } catch (error) {
    res.status(500).send({ status: "error", message: "error created" });
  }
};
const deleteFavorites = (req, res) => {};

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorites.find().select(
      "Title Year imdbID Type Poster favorite"
    );
    res.send({ status: "OK", data: favorites });
  } catch (error) {
    console.log("get Favorites error", error);
    res.status(500).send({ status: "ERROR", data: e.message });
  }
};

module.exports = { createFavorites, deleteFavorites, getFavorites };
