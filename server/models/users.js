const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: {
      type: String,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    picture: {
      type: String,
    },
    favorites: [{
      id: String,
      itemType: String,
    }],
});

UserSchema.statics.findOrCreate = function findOrCreate(profile, cb) {
  var userObj = new this();
  this.findOne({googleId : profile.id},function(err,result){ 
    if(!result){
      userObj.googleId = profile.id;
      userObj.email = profile.emails[0].value;
      userObj.name = profile.displayName;
      userObj.picture = profile.photos[0].value;
      userObj.favorites = [];
      userObj.save(cb);
    }else{
      cb(err,result);
    }
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;