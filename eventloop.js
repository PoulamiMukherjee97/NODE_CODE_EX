const events = require('events');

// Creating an event emitter object
const eventEmitter = new events.EventEmitter();
// Creating custom event using event emitter obj
eventEmitter.on('onReportGenerated',  () => console.log('Inside onReportGenerated'))
console.log('Before event is emitted');
// Trigger Event through program
eventEmitter.emit('onReportGenerated');

console.log('Program ended');
