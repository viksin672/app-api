var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  image: [{
    pics:{
      type: String,
      default: ''
    }
  }],
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
  author: {
    user_id:{
      type: String,
      default: ''
    },
    created:{
      type:Date,
      default: Date.now
    }
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
