const User = require("../models/user.model");

require("../db/conn");

class SignInRepos{
    constructor(){

    }

    async getUserByEmail(query) {
        let result = await User.findOne(query);
        return result;
    }

}

module.exports = SignInRepos;