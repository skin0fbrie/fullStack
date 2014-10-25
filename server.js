var myData = require('./server-assets/myData.js')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

console.log("server starting")

app.use(bodyParser.json())
//app.use(express.static(__dirname + '/public'));

app.get('/me', function (req, res) {
	var me = myData.getMe();
	res.send(me);
})

app.get('/activities', function (req, res) {
	var activities = myData.getActivities();
	res.send(activities);
})

app.post('/activities', function (req, res){
	var newAct = req.body
	myData.addActivity(newAct)
	res.send(newAct)
})

app.get('/family', function (req, res) {
	var family = myData.getFamily();
	res.send(family);
})

app.post('/family', function (req, res){
	var newFamily = req.body
	myData.addFamily(newFamily)
	res.send(newFamily)
})

app.get('/friends', function (req, res) {
	var friends = myData.getFriends();
	res.send(friends);
})

app.post('/friends', function (req, res){
	var newFriend = req.body
	myData.addFriend(newFriend)
	res.send(newFriend)
})


// ['me', 'activities', 'family', 'friends'].forEach(function(endpoint){
// 	app.get('/' + endpoint.toLowerCase(), function(req, res){
// 		res.send(myData['get' + endpoint]());
// 	});
// })

app.listen(3000)