// var mongoose = require('mongoose')
// var gracefulShutdown

// mongoose.connect(process.env.MONGO_CONNECT, {autoIndex: false})
// mongoose.set('useFindAndModify', false)

// //Connection Events
// mongoose.connection.on('connected', function() {
//     console.log('Mongoose Connected')
// })
// mongoose.connection.on('error', function(err) {
//     console.log('Connection Failed: ', err)
// })
// mongoose.connection.on('disconnected', function() {
//     console.log('Mongoose Disconnected')
// })

// //Capture App Termination/Restart Events
// //To Be Called When Process Is Restarted Or Terminated
// gracefulShutdown = function (msg, callback) {
//     mongoose.connection.close(function() {
//         console.log('Mongoose Disconnected Through ' + msg)
//         callback()
//     })
// }

// //For Nodemon Restarts
// process.once('SIGUSR2', function() {
//     gracefulShutdown('app termination', function() {
//         process.exit(0)
//     })
// })

var mongoose = require('mongoose');
var gracefulShutdown;

mongoose.connect(process.env.MONGO_CONNECT, { autoIndex: false });
mongoose.set('useFindAndModify', false);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected');
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// Capture App Termination / restart events
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

// Bring in Schemas and Models
require('./test');
