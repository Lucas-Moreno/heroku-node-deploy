module.exports = app => {

  const userController = require("../controllers/user/user.controller.js")
  // Get one User with iduser
  app.get("/user", userController.getUser)
}