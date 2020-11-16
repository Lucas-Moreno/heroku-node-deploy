const UserModel = require("../../models/user/user.model.js")

const {
  response201WithData,
  response400WithMessage,
  response500WithMessage
} = require("../../helpers/expressRes")

const getUser = async (req, res) => {
  try {
    const data = await UserModel.getUser()
    if (!data) {
      return response400WithMessage(res, "Not user")
    }
    return response201WithData(res, data)
  }
  catch (e) {
    console.log(e)
    return response500WithMessage(res, "oups failed ! error T_T")
  }
}

module.exports = { getUser }
