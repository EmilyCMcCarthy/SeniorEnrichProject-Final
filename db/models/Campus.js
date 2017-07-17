'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


const Campus = module.exports = db.define('campus', {
  name: {
      type: Sequelize.STRING,
      allowNull: false,
      Unique: true
      
  },
  image: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }

}, {
  defaultScope: {
   
  },
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('student')
      }]
    })
  },
    instanceMethods: {
     toJSON: function () {
       return Object.assign({}, this.get());
     }
    }
})