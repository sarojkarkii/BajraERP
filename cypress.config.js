const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env:{
    email:'saroj.karki@bajratechnologies.com',
    email1:"randommail@gmail.com",
    password:'Savechanges206206',
    name:'Saroj Karki'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://bajratechnologies.com/web/login"
  },
});
