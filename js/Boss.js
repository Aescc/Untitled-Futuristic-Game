class Boss
{
	constructor()
	{
		var x = 5000;
		var y = 5000;
		const w = 160;
		const h = 160;
		const SPEED = 3;
		var moveDir = 1;
		var shootCounter = 0;
		const SHOOT_MAX = 40;
		var spawned = false;
		var isDone = false;
		//
		this.Update = function()
		{
			if( !Random( 0,50 ) )
				moveDir = Random( -1,1 );
			while( y + h > canvas.height )
			{
				moveDir = -1;
				--y;
			}
			while( y < 0 )
			{
				moveDir = 1;
				++y;
			}
			y += SPEED * moveDir;
			if( x > canvas.width * 0.5 && !Random( 0,1 ) )
				--x;
			if( shootCounter > SHOOT_MAX && x > 0 && x < canvas.width &&
				y > 0 && y < canvas.height )
			{
				isDone = false;
				for( var i = 0; i < enemyBullets.length; ++i )
				{
					if( enemyBullets[i].GetUsable() && !isDone )
					{
						const rotation = FindAngle	( x,y,player.GetPos().x,player.GetPos().y );
						const rotation2 = FindAngle	( x + w / 2,y + w / 2,50,canvas.height / 2 );
						enemyBullets[i].SetPos		( { x:x,y:y + h / 2,rot:rotation2 } );
						enemyBullets[i + 1].SetPos	( { x:x,y:y + h / 2,rot:rotation2 + 20 } );
						enemyBullets[i + 2].SetPos	( { x:x,y:y + h / 2,rot:rotation2 - 20 } );
						// enemyBullets[i + 3].SetPos	( { x:x,y:y,rot:rotation } );
						isDone = true;
						shootCounter = 0;
					}
				}
			}
			else
				++shootCounter;
		}
		this.Draw = function()
		{
			Rect( x,y,w,h,"#CCC" );
		}
		this.Respawn = function()
		{
			if( !spawned )
			{
				x = canvas.width + 20;
				y = canvas.height * 0.2;
				spawned = true;
			}
		}
		this.GetPos = function()
		{
			return {
				x:	x,
				y:	y
			}
		}
	}
}