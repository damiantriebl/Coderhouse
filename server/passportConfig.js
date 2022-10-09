const bcrypt = require('bcryptjs');
const user = require('./User.js')
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use (new localStrategy((userId, pass, done) => {
        user.findOne({userId}, (err, usr)=>{
            if(err) throw err
            if(!usr) return done(null, false)
            bcrypt.compare(pass, usr.pass, (err, result)=> {
                if (err) throw err
                if(result === true){
                    return done(null, usr)
                }else{
                    return done(null, false)
                }
            })    
        })
    }))
    passport.serializeUser((user, cb => {
        cb(null, user.id)
    }))
    passport.deserializeUser((user, cb)=>{
        User.findOne({_id : id}, (err, usr)=>{
            cb(err, usr)
        })
    })
} 