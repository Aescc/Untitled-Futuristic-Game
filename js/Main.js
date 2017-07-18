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
var dragCounter = 0;
const DRAG_MAX = 20;
var shakeTimer = 0;
const SHAKE_MAX = 10;
var loadTimer = 0;
const LOAD_TIME_MAX = canvas.width;

// Booleans
var firing = false;
var started = false;
var startDrag = false;
var isShaking = false;

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
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
	new Bullet( canvas.width,canvas.height,1 ),
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
var titleColors = [];
var titleColors2 = [];

// Objects
var mouse = { x: 0,y: 0 }
var player = new Player( 50,canvas.height / 2 );
var background = new BG( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY );
var soundBar = new SoundBar( canvas.width / 3,canvas.height - 50 );
var boss = new Boss();

// Audio
var ouch = new Audio( "audio/ouch0.wav" );
var mainTheme = new Audio( "audio/theme.wav" );

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
	SetVol();
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
	boss.Init();
	DrawColors();
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
		SetVol();
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
	document.body.style.cursor = "crosshair";
}

function CheckClick2()
{
	// When you stop clicking, this happens.
	firing = false;
	document.body.style.cursor = "default";
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
	if( loadTimer > LOAD_TIME_MAX )
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
			boss.Update();
			if( totalGold > 250 )
				totalGold = 250;
			if( totalGold < 10 * 2 )
				fireCounterMax = fireCounterMaxORIG - totalGold / 2; // Math.floor( fireCounterMaxORIG - ( Math.sqrt( totalGold ) * 2 ) );
			else if( totalGold < 20 * 2 )
				fireCounterMax = fireCounterMaxORIG - 10 - totalGold / 4;
			else if( totalGold < 25 * 2 )
				fireCounterMax = fireCounterMaxORIG - 20 - totalGold / 10;
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
						rock.Hurt( Random( 1,2 ) );
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
				if( HitTest( player.GetPosGold().x,player.GetPosGold().y,player.GetPosGold().w,player.GetPosGold().h,
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
					turret.Hurt( Random( 1,2 ) ); // Changed from 1,2.
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
					tank.Hurt( Random( 1,2 ) ); // Changed from 1,2.
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
				if( HitTest( bullets[i].GetPos().x,bullets[i].GetPos().y,
					bullets[i].GetPos().w,bullets[i].GetPos().h,
					boss.GetPos().x,boss.GetPos().y,
					boss.GetPos().w,boss.GetPos().h ) )
				{
					boss.Hurt( Random( 1,2 ) );
					bullets[i].Respawn();
					ouch.currentTime = 0;
					ouch.play();
				}
			}
			// console.log( rocks[0].y );
			const scoreOffset = Math.ceil( scoreAdd / 25 );
			if( scoreAdd >= scoreOffset )
			{
				totalScore += scoreOffset;
				scoreAdd -= scoreOffset;
			}
		}
		else
		{
			// Start game here.
		}
		soundBar.Update();
		++buffer;
		if( keyMap[32] && buffer > BUFFER_MAX )
		{
			DrawColors();
			started = !started;
			// mainTheme.loop = true;
			if( started )
			{
				mainTheme.play();
				mainTheme.addEventListener( 'ended',function() {
					this.currentTime = 0;
					this.play();
				},false );
			}
			else
				mainTheme.pause();
			buffer = 0;
		}
		if( mainTheme.currentTime > 47.95 ) // Make a more perfect loop of music.
			mainTheme.currentTime = 0;
		if( firing && !started && HitTest( mouse.x - 50,mouse.y,100,20,
			soundBar.GetPos().x,soundBar.GetPos().y,
			soundBar.GetPos().w,soundBar.GetPos().h ) )
		{
			SetVol();
		}
		if( totalScore > 1500 )
		{
			boss.Respawn();
			totalGold = 5000; // Ensure you have max fire rate.
		}
		else
			boss.SetPos( 9000,9000 );
		if( false )
		{
			turrets.forEach( function( turret )
			{
				if( !( turret.GetPos().x > 0 && turret.GetPos().x < canvas.width &&
					turret.GetPos().y > 0 && turret.GetPos().y < canvas.height ) )
					turret.SetPos( 5000,0 );
			} );
			rocks.forEach( function( rock )
			{
				if( !( rock.GetPos().x > 0 && rock.GetPos().x < canvas.width &&
					rock.GetPos().y > 0 && rock.GetPos().y < canvas.height ) )
					rock.SetPos( 5000,0 );
			} );
			tanks.forEach( function( tanks )
			{
				if( !( tanks.GetPos().x > 0 && tanks.GetPos().x < canvas.width &&
					tanks.GetPos().y > 0 && tanks.GetPos().y < canvas.height ) )
					tanks.SetPos( 5000,0 );
			} );
		}
		if( boss.GetHP() < 1 )
		{
			
		}
		if( isShaking )
		{	
			if( shakeTimer < SHAKE_MAX )
			{
				++shakeTimer;
				background.Shake( true,5 );
			}
			else
			{
				shakeTimer = 0;
				isShaking = false;
				background.Shake( false,5 );
			}
		}
	}
	else
		loadTimer += Random( 0,5 );
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
	boss.Draw();
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
	// Text( 3,20,"Score: " + totalScore,"#FFF","20PX Arial" );
	DrawScore( totalScore,1,3,3 );
	DrawScore( totalScore,0,0,0 );
	if( !started )
	{
		Rect( 0,0,canvas.width,canvas.height,"#111",0.3 );
		// Text( canvas.width / 5,canvas.height / 2,"Press [space]!","#FFF","70PX Helvetica" );
		// context.drawImage( TITLE_PIC,50,50 );
		DrawTitle( 2,3,3 );
		DrawTitle( 2,-3,-3 );
		DrawTitle( 0,0,0 );
		DrawPause();
		soundBar.Draw();
	}
	if( loadTimer < LOAD_TIME_MAX )
	{
		Rect( loadTimer,0,canvas.width,canvas.height,"#333" );
	}
}

function ScreenShake()
{
	isShaking = true;
}
