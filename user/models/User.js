var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: ''
  },
  lastname: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
 
  password: {
    type: String,
    default: ''
  },
   mobile_no:{
       type: Number,
       default: ''
   },
   location:{
      type: String,
      default:''
   },
   blog:[{
      title: {
        type: String,
        default: ''
      },
      image:{
          type: String,
          default: ''
        },
      category: {
        type: String,
        default: ''
      },
      body:{
          type: String,
          default: ''
      },
      sold:{
        type:Boolean,
        default:false
      },
          created:{
          type:Date,
          default: Date.now
        }
     }]

});

UserSchema.methods.generateHash = function(Password){
  return bcrypt.hashSync(Password, bcrypt.genSaltSync(8),null);
};

UserSchema.methods.validPassword = function(Password){
  return bcrypt.compareSync(Password,this.Password,null);
};

module.exports = mongoose.model('User', UserSchema);
