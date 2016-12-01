var mongoose = require('mongoose');

var ClimbTable = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclmb: Number
});

var FlapsTable = new mongoose.Schema({
	flaps: String,
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var LandingTable = mongoose.Schema({
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number,
});


mongoose.model('Climb', ClimbTable, 'climbTable');
mongoose.model('Flaps', FlapsTable, 'FlapsTable');
mongoose.model('Landing', LandingTable, 'LandingTable');

