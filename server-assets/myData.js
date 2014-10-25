var me = {
	name: 'Esther Summerson',
	height: '5\'4"',
	age: 22,
	movie: 'What is a \'movie\'?',
	artist: 'August Renoir',
	food: 'Steak and ale pie'
}

var activities = [
	{
		name: 'housekeeping'
	},
	{
		name: 'visiting the poor'
	}, 
	{
		name: 'surviving smallpox'
	},
	{
		name: 'writing in my diary'
	}]

var friends = [
	{
		name: 'John Jaundice',
		age: '57',
		met: '2 years ago'
	},
	{
		name: 'Ada Clair',
		age: '18',
		met: '2 years ago'
	},
	{
		name: 'Richard Carstair',
		age: '20',
		met: '2 years ago'
	}]

var family = [
	{
		name: 'Lady Dedlock',
		status: 'secret',
		relationship: 'mother'
	},
	{
		name: 'Capt. Hordon',
		status: 'dead',
		relationship: 'father'
	},
	{
		name: 'Miss Barbary',
		status: 'dead',
		relationship: 'aunt'
	}]

module.exports = {
	getMe: function() {
	return me;
	},
	getActivities: function() {
 	return activities
 	},
 	addActivity: function(newAct) {
	activities.push(newAct)
	}

}

module.exports.getFriends = function() {
	return friends;
}

module.exports.addFriend = function(newFriend) {
	friends.push(newFriend);
}

module.exports.getFamily = function() {
	return family;
}

module.exports.addFamily = function(newFamily) {
	family.push(newFamily);
}
