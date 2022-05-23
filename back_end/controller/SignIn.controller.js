const repos = require("../repos/SignIn.repos");
const repo = new repos();
let config = require('../config');
const bcrypt = require("bcryptjs");

let {  } = config;

exports.login = async (req, res) => {
    try {
        let query = {};
        let {email, password} = req.body;
        query.email = email;

        if (!email || !password) {
            res.send({ code: -1, error: "email/Password not provided"});
        } else {
            let record = await repo.getUserByEmail(query);

            if (record) {
    
                if(record.password !== password){
                    res.send({ code: -1, error: "Invalid credentials"});
                }else{
                    res.send({ code: 0, message: "User SignIn Successfull", data:record}); 
                }
    
            } else {
                res.send({ code: -1, error: "This account is not exist. Please Sign Up"});
            }
        }

    } catch (err) {
        res.send({code: -1, error: err.message});
    }
}; 

