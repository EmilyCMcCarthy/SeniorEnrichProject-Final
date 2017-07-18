'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var Campus = require('./Campus')



const Student = module.exports = db.define('student', {
  name: {
   type: Sequelize.STRING,
   allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    valudate: {
      isEmail: true
    }
  }
  
}, {
  defaultScope: {
      include: [Campus]
    
  },
 

  }
)

Student.belongsTo(Campus);
Campus.hasMany(Student)
