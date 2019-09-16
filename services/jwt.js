const jwt = require('jwt-simple')
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD

exports.createToken = function (user){
    const payload = {
        sub : user.id
    }
    return jwt.encode(payload,TOKEN_PASSWORD)
}
exports.validateToken = function (){
    
}