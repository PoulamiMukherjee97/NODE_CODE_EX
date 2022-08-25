const events = require('events');

//Creating event emitter object
const eventEmitter = new events.EventEmitter();

/*Creating event using event emitter object */
/* onLoadingDashboard event created */

eventEmitter.on('onLoadingDashboard', () => {
    console.log('Dashboard loaded');
});

//onLoginSuccessful event created
eventEmitter.on('onLoginSuccessful', () => {
    console.log('Login Successful')
    //emitting onLoadingDashboard event
    eventEmitter.emit('onLoadingDashboard');
});

//emitting onLoginSuccessful event
eventEmitter.emit('onLoginSuccessful');