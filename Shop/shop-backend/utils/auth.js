const USER = require('../schemas/userSchema')
const getTokenFrom = request => {
    const authorization = request.get('authorization')
  
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

const getUserIdByName = async (name) => {
    const user = await USER.findOne({ name: name })
    return user._id
}
module.exports = { getTokenFrom, getUserIdByName }