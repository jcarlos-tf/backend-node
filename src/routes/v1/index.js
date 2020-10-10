const favoritesRoutes = require("./favorites-routes");

module.exports = (app) => {
  app.use("/api/v1/favorites", favoritesRoutes);
};
