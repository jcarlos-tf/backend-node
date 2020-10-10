const mongose = require("mongoose");

const { Schema } = mongose;

const favoritesSchema = new Schema(
  {
    Title: { type: String, required: true },
    Year: { type: String, required: true },
    imdbID: { type: String, required: true },
    Type: { type: String, required: true },
    Poster: { type: String, required: true },
    favorite: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const model = mongose.model("favorites", favoritesSchema);

module.exports = model;
