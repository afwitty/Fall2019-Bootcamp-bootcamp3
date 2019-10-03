//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://guest:cen3031access@cen3031-seeder-yu7cy.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '93924ef0082a4cf8ad07f54d7dd8cdbf' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};