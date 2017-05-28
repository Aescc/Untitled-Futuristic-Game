const canvas = document.getElementById( 'gc' );
const context = canvas.getContext( '2d' );

// Numbers
var scrollSpeedX = -0.7;
var scrollSpeedY = 0;
var fireCounter = 0;
var fireCounterMax = 4;
var totalGold = 0;

// Booleans
var firing = false;

// Arrays
var keyMap = [];
var rocks =
[
	new Rock( canvas.width + 100,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 200,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 300,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 400,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 500,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 600,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 700,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY ),
	new Rock( canvas.width + 800,0,2,canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
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
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height ),
	new Bullet( canvas.width,canvas.height )
];
var turrets =
[
	new Turret( Random( canvas.width,canvas.width * 2 ),Random( 0,canvas.height - 40 ),canvas.width,canvas.height,scrollSpeedX,scrollSpeedY )
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

// Objects
var mouse = { x: 0,y: 0 }
var player = new Player( 50,canvas.height / 2 );
var background = new BG( canvas.width,canvas.height,scrollSpeedX,scrollSpeedY );

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
	// Pixel perfect!
	context.webkitImageSmoothingEnabled = false;
	context.mozImageSmoothingEnabled = false;
	context.imageSmoothingEnabled = false;
	player.SetPos( { x:50,y:canvas.height / 2 } );
	rocks.forEach( function( rock )
	{
		rock.Respawn();
	} );
	golds.forEach( function( gold )
	{
		gold.Respawn();
	} );
	if( firstTime )
	{
		player.InitImages();
		background.Generate();
		bullets.forEach( function( bullet )
		{
			bullet.InitImages();
		} );
		turrets.forEach( function( turret )
		{
			turret.InitImages();
		} );
		console.log( "Initialization complete!" );
	}
	else
	{
		
	}
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
	player.SetImageDir( mouse.x,mouse.y );
	background.Update();
	rocks.forEach( function( rock )
	{
		rock.Update();
		if( HitTest( player.GetPos().x,player.GetPos().y,player.GetPos().w,player.GetPos().h,
			rock.GetPos().x,rock.GetPos().y,rock.GetPos().w,rock.GetPos().h ) )
		{
			Init();
			totalGold = 0;
		}
		bullets.forEach( function( bullet )
		{
			if( HitTest( bullet.GetPos().x,bullet.GetPos().y,bullet.GetPos().w,bullet.GetPos().h,
				rock.GetPos().x,rock.GetPos().y,rock.GetPos().w,rock.GetPos().h ) )
			{
				// rock.Respawn();
				rock.Hurt( 1 );
				bullet.Respawn();
			}
		} );
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
	turrets.forEach( function( turret )
	{
		turret.Update();
		turret.SetImageDir( player.GetPos().x,player.GetPos().y );
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
			if( bullets[i].GetUsable() && !isDone )
			{
				rotation = FindAngle( player.GetPos().x,player.GetPos().y,mouse.x,mouse.y );
				bullets[i].SetPos    ( { x:player.GetPos().x,y:player.GetPos().y,rot:rotation } );
				bullets[i + 1].SetPos( { x:player.GetPos().x,y:player.GetPos().y,rot:rotation + 5 } );
				bullets[i + 2].SetPos( { x:player.GetPos().x,y:player.GetPos().y,rot:rotation - 5 } );
				isDone = true;
				fireCounter = 0;
			}
		}
	}
	var willResetRocks = true;
	// TODO: Make more enemies with different AI... Maybe turrets or something?
	rocks.forEach( function( rock )
	{
		if( !rock.GetUsable() )
		{
			willResetRocks = false;
		}
	} );
	if( willResetRocks )
	{
		rocks.forEach( function( rock )
		{
			rock.Respawn();
		} );
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
	particles.forEach( function( particle )
	{
		particle.Draw();
	} );
	bullets.forEach( function( bullet )
	{
		bullet.Draw();
	} );
	player.Draw();
}
