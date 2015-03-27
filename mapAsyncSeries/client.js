var mapAsyncSeries =  require('./map_async_series');

var messages = ['message 1', 'message 2', 'message 3'];

var index = 0;
mapAsyncSeries(messages, send, done);

function done(err, results) {
	if(err) {
		console.error(err);
	}
	else{
		console.log('all messages sent, results: ', results);
	}
}

function send(message, cb){
	var err = Math.random() > 0.8 ? new Error("i am error in " + message) : null;
	var value =  ++ index;
	setTimeout(cb, randomTimeout(), err, value);
	//console.log("sent: ", message);
}

function randomTimeout(){
	return Math.floor(Math.random() * 1e3);
}
