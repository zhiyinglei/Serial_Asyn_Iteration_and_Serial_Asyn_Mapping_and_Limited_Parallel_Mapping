var mapAsyncLimit =  require('./map_async_limit');

var messages = [
		'message 1', 'message 2', 'message 3',
		'message 4', 'message 5', 'message 6'
		];

var index = 0;
mapAsyncLimit(4, messages, send, done);

function done(err, results) {
	if(err) {
		console.error(err);
	}
	else{
		console.log('all messages sent, results: ', results);
	}
}

function send(message, cb){
	var err = Math.random() > 0.9 ? new Error("i am error in " + message) : null;
	var value =  ++ index;
	console.log("sending: ", message, ' is on the fly');
	setTimeout(cb, randomTimeout(), err, value);
}

function randomTimeout(){
	return Math.floor(Math.random() * 1e4);
}
