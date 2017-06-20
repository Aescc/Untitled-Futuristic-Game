class Boss
{
	constructor()
	{
		var x = 5000;
		var y = 5000;
		const w = 80;
		const h = 80;
		var HP = 500;
		const HP_MAX = HP;
		const SPEED = 3;
		var moveDir = 1;
		var shootCounter = 0;
		const SHOOT_MAX = 40;
		var spawned = false;
		var isDone = false;
		var image = new Image();
		var HPBar = new HealthBar();
		var deathCounter = 0;
		var DEATH_TIME = 200;
		//
		this.Init = function()
		{
			image.src = "images/boss/boss0.png";
		}
		this.Update = function()
		{
			if( HP > 0 )
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
							// enemyBullets[i].SetPos		( { x:x,y:y + h / 2,rot:rotation2 } );
							// enemyBullets[i + 1].SetPos	( { x:x,y:y + h / 2,rot:rotation2 + 20 } );
							// enemyBullets[i + 2].SetPos	( { x:x,y:y + h / 2,rot:rotation2 - 20 } );
							enemyBullets[i + 0].SetPos	( { x:x,y:y + h / 2,rot:    0 } );
							enemyBullets[i + 1].SetPos	( { x:x,y:y + h / 2,rot:   45 } );
							enemyBullets[i + 2].SetPos	( { x:x,y:y + h / 2,rot:   90 } );
							enemyBullets[i + 3].SetPos	( { x:x,y:y + h / 2,rot:  135 } );
							enemyBullets[i + 4].SetPos	( { x:x,y:y + h / 2,rot:  180 } );
							enemyBullets[i + 5].SetPos	( { x:x,y:y + h / 2,rot:  -45 } );
							enemyBullets[i + 6].SetPos	( { x:x,y:y + h / 2,rot:  -90 } );
							enemyBullets[i + 7].SetPos	( { x:x,y:y + h / 2,rot: -135 } );
							// enemyBullets[i + 3].SetPos	( { x:x,y:y,rot:rotation } );
							isDone = true;
							shootCounter = 0;
						}
					}
				}
				else
					++shootCounter;
				HPBar.SetPos( x,y + h  );
				HPBar.SetHP( HP / HP_MAX );
			}
		}
		this.Draw = function()
		{
			// Rect( x,y,w,h,"#CCC" );
			context.drawImage( image,x,y,w,h );
			HPBar.Draw();
			if( HP < 1 )
			{
				++deathCounter;
				if( deathCounter > DEATH_TIME )
				{
					started = !started;
					deathCounter = 0;
					HP = HP_MAX;
				}
				var particleNum = 0;
				const MAX_PARTICLES = Random( 20,25 );
				for( var i = 0; i < bulletParticles.length; ++i )
				{
					if( bulletParticles[i].GetInfo() && particleNum < MAX_PARTICLES )
					{
						const randX = Random( x,x + w );
						const randY = Random( y,y + h );
						const randC = "#DD" + Random( 11,44 ) + Random( 11,44 );
						bulletParticles[i].SetPos( { x:randX,y:randY,c:randC } );
						++particleNum;
					}
				}
			}
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
				y:	y,
				w:	w,
				h:	h
			}
		}
		this.GetHP = function()
		{
			return HP;
		}
		this.Hurt = function( amount )
		{
			var particleNum = 0;
			const MAX_PARTICLES = Random( 1,3 );
			for( var i = 0; i < bulletParticles.length; ++i )
			{
				if( bulletParticles[i].GetInfo() && particleNum < MAX_PARTICLES )
				{
					const randX = Random( x,x + w );
					const randY = Random( y,y + h );
					const randC = "#FF" + Random( 11,44 ) + Random( 11,22 );
					bulletParticles[i].SetPos( { x:randX,y:randY,c:randC } );
					++particleNum;
				}
			}
			HP -= amount;
		}
	}
}