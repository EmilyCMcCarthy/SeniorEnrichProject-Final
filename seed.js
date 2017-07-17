// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

var Promise = require('bluebird');
var db = require('./db');
var Campus = require('./db/models/Campus');
var Student = require('./db/models/Student');
var Bluebird = require('bluebird')

var campuses = [
        {name: "Londinium School of Javascript",
            image: "http://fireflyonlinewiki.com/w/images/thumb/8/81/Londinium.png/300px-Londinium.png",
            location: "Londinium, White Sun System"
        },
        {name: "Easis (City of Light) School",
            image: "https://wiki.rpg.net/images/thumb/1/12/Shinon.png/300px-Shinon.png",
            location: "Sihnon, White Sun System"
        },
        {name: "Learn Javascript on a moon! (Whitefall)",
            image: "http://fireflyonlinewiki.com/w/images/c/c4/Whitefall.png",
            location: "Whitefall Moon, orbiting Athens in the Georgia System"
        },
         {name: "Shiny Osiris",
            image: "http://fireflyonlinewiki.com/w/images/thumb/e/e3/Osiris.png/300px-Osiris.png",
            location: "Osiris, White Sun System"
        },
         {name: "Computers at Miranda",
            image: "http://2.bp.blogspot.com/-ZIe0Mz-zB-o/TaFSAcFE1XI/AAAAAAAABME/65yKb5TI3-g/s1600/Planet_Vulcan_by_vanderghast.jpg",
            location: "Miranda, Burnham System"
        },
         {name: "Kaytree Park School",
            image: "http://forum.fireflyonline.website/gallery/115_19_05_15_8_22_45.png",
            location: "Persephone, Lux System"
        }
       ]


var students =  [  
        {name: "Emily", email: "emccarthy510@yahoo.com", campus: campuses[0]
            },
            {name: "Elisabeth", email: "emccarthy@firefly.com", campus: campuses[1]},
            {name: "Rebecca", email: "shiny@awesome.com", campus: campuses[3]},
            {name: "John", email: "Mars@notUntil2028.com", campus: campuses[4]},
            {name: "Hank", email: "WeAreAllBatPeople@DFTBA.com", campus: campuses[5]},
            {name: "Timothy", email: "Browncoat@aol.com", campus:  campuses[2]}
    
    ];

// The below currently works:
db.sync({force: true})
  .then(() => {
    return Bluebird.map(students, student => {
      return Student.create(student, {
          include: [Campus]
      } )
  })})
  .then(() => {
    console.log('The database hase been seeded');
  })
  .catch(err => {
    console.log('There has been an error', err);
  })
  .finally(() => {
    db.close();
    console.log('connection to the database closed!')
  })


  


