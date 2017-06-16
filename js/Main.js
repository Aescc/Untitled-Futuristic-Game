const canvas = document.getElementById( 'gc' );
const context = canvas.getContext( '2d' );

// Numbers
var scrollSpeedX = -0.7;
var scrollSpeedY = 0;
var fireCounter				= 30;
var fireCounterMax			= 30;
const fireCounterMaxORIG	= 30;
var totalGold = 50;
var totalScore = 0;
var scoreAdd = 0;
var buffer = 5;
const BUFFER_MAX = 5;

// Booleans
var firing = false;
var started = false;

// Arrays
var keyMap = [];
var rocks =
[
	new Rock( canvas.width + 300,0,1,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 1600,0,1,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 2900,0,1,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
];
var golds =
[
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Gold( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
];
var bullets =
[
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 ),
	new Bullet( canvas.width,canvas.height,0 )
];
var enemyBullets =
[
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 )
];
var turrets =
[
	new Turret( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height - 40 ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Turret( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height - 40 ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Turret( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height - 40 ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Turret( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height - 40 ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
];
var tanks =
[
	new Tank( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Tank( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Tank( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
];
var particles =
[
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
];
var bulletParticles =
[
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Particle( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
];

// Objects
var mouse = { x: 0,y: 0 }
var player = new Player( 50,canvas.height / 2 );
var background = new BG( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY );

// Audio
const ouch = new Audio( "audio/ouch0.wav" );

window.onload = function()
{
	const fps = 30;
	setInterval(function()
	{
		Update();
		Draw();
	}, 1000/fps);
	onkeydown = onkeyup = function(e)
	{
		keyMap[e.keyCode] = e.type == "keydown";
	}
	canvas.addEventListener( 'mousedown',CheckClick );
	canvas.addEventListener( 'mouseup',CheckClick2 );
	canvas.addEventListener( 'mousemove',function( e )
	{
			mouse.x = CheckMousePos( e ).x;
			mouse.y = CheckMousePos( e ).y;
	} );
	Init( true );
};

function Init( firstTime = false )
{
	Update();
	started = false;
	player.SetPos( { x:50,y:canvas.height / 2 } );
	rocks.forEach( function( rock )
	{
		rock.Respawn();
	} );
	turrets.forEach( function( turret )
	{
		turret.Respawn();
	} );
	tanks.forEach( function( tank )
	{
		tank.Respawn();
	} );
	golds.forEach( function( gold )
	{
		gold.Respawn();
	} );
	bullets.forEach( function( bullet )
	{
		bullet.Respawn();
	} );
	enemyBullets.forEach( function( enemyBullet )
	{
		enemyBullet.Respawn();
	} );
	particles.forEach( function( particle )
	{
		particle.Respawn();
	} );
	bulletParticles.forEach( function( particle )
	{
		particle.Respawn();
	} );
	if( firstTime )
	{
		// Pixel perfect!
		context.webkitImageSmoothingEnabled = false;
		context.mozImageSmoothingEnabled = false;
		context.imageSmoothingEnabled = false;
		player.InitImages();
		background.Generate();
		bullets.forEach( function( bullet )
		{
			bullet.InitImages();
		} );
		enemyBullets.forEach( function( enemyBullet )
		{
			enemyBullet.InitImages();
		} );
		turrets.forEach( function( turret )
		{
			turret.InitImages();
		} );
		tanks.forEach( function( tank )
		{
			tank.InitImages();
		} );
		rocks.forEach( function( rock )
		{
			rock.Init();
		} );
		console.log( "Initialization complete!" );
	}
	else
	{
		
	}
	totalGold = 0;
	totalScore = 0;
	scoreAdd = 0;
}

function CheckClick()
{
	// When you click, this happens.
	firing = true;
}

function CheckClick2()
{
	// When you stop clicking, this happens.
	firing = false;
}

function CheckMousePos( e )
{
	const rect = canvas.getBoundingClientRect();
	const root = document.documentElement;
	const mouseX = e.clientX - rect.left - root.scrollLeft;
	const mouseY = e.clientY - rect.top - root.scrollTop;
	return { x: mouseX,y: mouseY };
}

function Update()
{
	if( started )
	{
		// Update things here
		if( keyMap[87] )
		{
			// W
			if( player.CheckBounds( 0,0 ) )
			{
				player.Move( 0 );
			}
		}
		else if( keyMap[83] )
		{
			// S
			if( player.CheckBounds( 1,canvas.height - player.GetPos().h ) )
			{
				player.Move( 1 );
			}
		}
		if( keyMap[65] )
		{
			// A
			if( player.CheckBounds( 2,0 ) )
			{
				player.Move( 2 );
			}
		}
		else if( keyMap[68] )
		{
			// D
			if( player.CheckBounds( 3,canvas.width - player.GetPos().w ) )
			{
				player.Move( 3 );
			}
		}
		player.Update();
		player.SetImageDir( mouse.x,mouse.y );
		background.Update();
		if( totalGold > 150 )
			totalGold = 150;
		fireCounterMax = Math.floor( fireCounterMaxORIG - ( Math.sqrt( totalGold ) * 2 ) );
		rocks.forEach( function( rock )
		{
			rock.Update();
			if( HitTest( player.GetPos().x,player.GetPos().y,player.GetPos().w,player.GetPos().h,
				rock.GetPos().x,rock.GetPos().y,rock.GetPos().w,rock.GetPos().h ) )
			{
				ouch.currentTime = 0;
				ouch.play();
				rock.Hurt( 99 );
				player.Hurt( Random( 2,5 ) );
			}
			bullets.forEach( function( bullet )
			{
				if( HitTest( bullet.GetPos().x,bullet.GetPos().y,bullet.GetPos().w,bullet.GetPos().h,
					rock.GetPos().x,rock.GetPos().y,rock.GetPos().w,rock.GetPos().h ) )
				{
					// rock.Respawn();
					ouch.currentTime = 0;
					ouch.play();
					rock.Hurt( 1 );
					bullet.Respawn();
				}
			} );
		} );
		enemyBullets.forEach( function( enemyBullet )
		{
			enemyBullet.Update();
			if( HitTest( player.GetPos().x,player.GetPos().y,player.GetPos().w,player.GetPos().h,
				enemyBullet.GetPos().x,enemyBullet.GetPos().y,enemyBullet.GetPos().w,enemyBullet.GetPos().h ) )
			{
				// Init();
				ouch.currentTime = 0;
				ouch.play();
				enemyBullet.Respawn();
				player.Hurt( Random( 1,2 ) );
			}
		} );
		golds.forEach( function( gold )
		{
			gold.Update();
			if( HitTest( player.GetPos().x,player.GetPos().y,player.GetPos().w,player.GetPos().h,
				gold.GetPos().x,gold.GetPos().y,gold.GetPos().w,gold.GetPos().h ) )
			{
				gold.SetPos( { x:5000,y:5000 } );
				++totalGold;
			}
		} );
		particles.forEach( function( particle )
		{
			particle.Update();
		} );
		bulletParticles.forEach( function( bulletParticle )
		{
			bulletParticle.Update();
		} );
		turrets.forEach( function( turret )
		{
			turret.Update();
			turret.SetImageDir( player.GetPos().x,player.GetPos().y );
			bullets.forEach( function( bullet )
			{
				if( HitTest( turret.GetPos().x,turret.GetPos().y,turret.GetPos().w,turret.GetPos().h,
				bullet.GetPos().x,bullet.GetPos().y,bullet.GetPos().w,bullet.GetPos().h ) )
			{
				ouch.currentTime = 0;
				ouch.play();
				turret.Hurt( 1 );
				bullet.Respawn();
			}
			} );
		} );
		tanks.forEach( function( tank )
		{
			tank.Update();
			tank.SetImageDir( player.GetPos().x,player.GetPos().y );
			bullets.forEach( function( bullet )
			{
				if( HitTest( tank.GetPos().x,tank.GetPos().y,tank.GetPos().w,tank.GetPos().h,
				bullet.GetPos().x,bullet.GetPos().y,bullet.GetPos().w,bullet.GetPos().h ) )
			{
				ouch.currentTime = 0;
				ouch.play();
				tank.Hurt( 1 );
				bullet.Respawn();
			}
			} );
		} );
		var isDone = false;
		if( fireCounter <= fireCounterMax )
		{
			++fireCounter;
		}
		// bullets.forEach( function( bullet )
		for( var i = 0; i < bullets.length; ++i )
		{
			bullets[i].Update();
			if( firing && fireCounter > fireCounterMax )
			{
				if( bullets[i].GetUsable() && !isDone && player.GetHP() > 0 )
				{
					rotation = FindAngle	( player.GetPos().x,player.GetPos().y,mouse.x,mouse.y );
					bullets[i].SetPos		( { x:player.GetPos().x,y:player.GetPos().y,rot:rotation } );
					bullets[i + 1].SetPos	( { x:player.GetPos().x,y:player.GetPos().y,rot:rotation + 10 } );
					bullets[i + 2].SetPos	( { x:player.GetPos().x,y:player.GetPos().y,rot:rotation - 10 } );
					isDone = true;
					fireCounter = 0;
				}
			}
		}
		// console.log( rocks[0].y );
		if( scoreAdd >= 1 )
		{
			++totalScore;
			--scoreAdd;
		}
	}
	else
	{
		// Start game here.
	}
	++buffer;
	if( keyMap[32] && buffer > BUFFER_MAX )
	{
		started = !started;
		buffer = 0;
	}
}

function Draw()
{
	// Draw things here
	Rect( 0,0,canvas.width,canvas.height,"#000" );
	background.Draw();
	turrets.forEach( function( turret )
	{
		turret.Draw();
	} );
	rocks.forEach( function( rock )
	{
		rock.Draw();
	} );
	golds.forEach( function( gold )
	{
		gold.Draw();
	} );
	tanks.forEach( function( tank )
	{
		tank.Draw();
	} );
	particles.forEach( function( particle )
	{
		particle.Draw();
	} );
	bulletParticles.forEach( function( bulletParticle )
	{
		bulletParticle.Draw();
	} );
	bullets.forEach( function( bullet )
	{
		bullet.Draw();
	} );
	enemyBullets.forEach( function( enemyBullet )
	{
		enemyBullet.Draw();
	} );
	player.Draw();
	Text( 3,20,"Score: " + totalScore,"#FFF","20PX Arial" );
	if( !started )
	{
		Rect( 0,0,canvas.width,canvas.height,"#111",0.3 );
		Text( canvas.width / 5,canvas.height / 2,"Press [space]!","#FFF","70PX Helvetica" );
	}
}
