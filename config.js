exports.config = {
   // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['project.js']
    //,capabilities:{'browserName':'firefox'}
    //,capabilities:{'browserName':'internet explorer'}
  };

  //to run tests in different browsers uncomment the capabilities and selenium address tag then open cmd and 
  //navigate to protractor folder in C/saad-/AppData/Roaming/npm/node_modules/protractor then type:
  //webdriver-manager start, in order to start the selenium server and then run your test/s.