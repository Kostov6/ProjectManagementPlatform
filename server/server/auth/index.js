//auth router

const authenticateUser = function(req){
    return new LoggedUser("Pencho","pencho@gmail.com")
}

class LoggedUser {
    constructor(name, email){
        this.name = name
        this.email = email
    }
}

const auth = function (req, res, next) {
    req.user = authenticateUser(req)
    next();
}

module.exports = { auth , LoggedUser }