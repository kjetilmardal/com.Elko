const Homey = require('homey');

class ElkoApp extends Homey.App {
  
  onInit() {
    this.log('Elko App is running!');
  }
  
}

module.exports = ElkoApp;