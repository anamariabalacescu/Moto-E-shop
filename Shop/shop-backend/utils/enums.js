
require('dotenv').config()
const USER_TYPES = {
    ADMIN: 'admin',
    CLIENT: 'client',
    PRODUCER: 'producer'
}

const switchUserSecret = (userType) => {
    switch (userType) {
        case USER_TYPES.ADMIN:
            return process.env.SECRET_ADMIN
        case USER_TYPES.CLIENT:
            return process.env.SECRET_CLIENT
        case USER_TYPES.PRODUCER:
            return process.env.SECRET_PRODUCER
        default:
            throw new Error('Invalid user type')
    }
}

module.exports = {
    USER_TYPES,
    switchUserSecret
}