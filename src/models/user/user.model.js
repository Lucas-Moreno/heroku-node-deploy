const sql = require("../db.js")


const User = function (user) {
  this.idUser = user.idUser
  this.name = user.name
  this.password = user.password
}

User.getUser = async () => {
  const [res] = await sql.promise().query("SELECT * FROM users")
  return res.lenght === 0 ? null : res
}

module.exports = User