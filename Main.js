const canvas = document.getElementById( 'gc' );
const context = canvas.getContext( '2d' );

var scrollSpeed = -2;

var keyMap = [];

var mouse = { x: 0,y: 0 }

var player = new Player();
var rocks = [
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Rock( canvas.width,canvas.height,scrollSpeed,scrollSpeed )
];
this.golds = [
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed ),
	new Gold( canvas.width,canvas.height,scrollSpeed,scrollSpeed )
];

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
	canvas.addEventListener( 'mousemove',function( e )
	{
			mouse.x = CheckMousePos( e ).x;
			mouse.y = CheckMousePos( e ).y;
	} );
	Init( true );
};

function CheckClick()
{
	// When you click, this happens.
}

function CheckMousePos( e )
{
	const rect = canvas.getBoundingClientRect();
	const root = document.documentElement;
	const mouseX = e.clientX - rect.left - root.scrollLeft;
	const mouseY = e.clientY - rect.top - root.scrollTop;
	return { x: mouseX,y: mouseY };
}

function Init( firstTime = false )
{
	player.SetPos( { x:50,y:50 } );
	rocks.forEach( function( rock )
	{
		rock.Respawn();
	});
	if( firstTime )
	{
		console.log( "Initialization complete!" );
	}
	else
	{
		
	}
}

function Update()
{
	// Update things here
	if( keyMap[87] )
	{
		// W
		player.Move( 0 );
	}
	else if( keyMap[83] )
	{
		// S
		player.Move( 1 );
	}
	if( keyMap[65] )
	{
		// A
		player.Move( 2 );
	}
	else if( keyMap[68] )
	{
		// D
		player.Move( 3 );
	}
	rocks.forEach( function( rock )
	{
		rock.Update();
		if( HitTest( player.GetPos().x,player.GetPos().y,player.GetPos().w,player.GetPos().h,
			rock.GetPos().x,rock.GetPos().y,rock.GetPos().w,rock.GetPos().h ) )
		{
			Init();
		}
	});
	golds.forEach( function( gold )
	{
		gold.Update();
	});
	// TODO: Make the player able to shoot bullets down-right only
	// and if the bullet hits a rock, the rock Respawns.
}

function Draw()
{
	// Draw things here
	Rect( 0,0,canvas.width,canvas.height,"#000" );
	rocks.forEach( function( rock )
	{
		rock.Draw();
	});
	golds.forEach( function( gold )
	{
		gold.Draw();
	});
	player.Draw();
}
