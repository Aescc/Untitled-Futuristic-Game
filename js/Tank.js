class Tank
{
	constructor( x,y,cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = x;
		this.y = y;
		this.w = 40;
		this.h = 40;
		this.HP = 20;
		this.HPORIG = this.HP;
		this.xORIG = this.x;
		this.yORIG = this.y;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
		this.scrollVX = scrollVX;
		this.scrollVY = scrollVY;
		this.images =
		[
			new Image(),
			new Image(),
			new Image(),
			new Image(),
			new Image(),
			new Image(),
			new Image(),
			new Image()
		];
		this.imageDir = 0;
		this.shootDir = 0;
		this.shootTimer = 0;
		// this.shootTimerMax = Random( 90,110 );
		this.shootTimerMax = Random( 40,60 );
		this.moveTimer = 0;
		// this.moveTimerMax = Random( 50,250 );
		this.moveTimerMax = Random( 10,40 );
		this.vx = 0;
		this.vy = 0;
		this.HPBar = new HealthBar();
	}
	InitImages()
	{
		this.images[0].src = "images/tanks/tank0.png";
		this.images[1].src = "images/tanks/tank1.png";
		this.images[2].src = "images/tanks/tank2.png";
		this.images[3].src = "images/tanks/tank3.png";
		this.images[4].src = "images/tanks/tank4.png";
		this.images[5].src = "images/tanks/tank5.png";
		this.images[6].src = "images/tanks/tank6.png";
		this.images[7].src = "images/tanks/tank7.png";
	}
	Update()
	{
		this.x += this.scrollVX;
		this.y += this.scrollVY;
		++this.shootTimer;
		if( this.shootTimer > this.shootTimerMax &&
			this.x > 0 && this.x < this.cWidth &&
			this.y > 0 && this.y < this.cHeight )
		{
			for( var i = 0; i < enemyBullets.length; ++i )
			{
				if( enemyBullets[i].GetUsable() )
				{
					const rotation = this.shootDir + Random( -15,15 );
					enemyBullets[i].SetPos( { x:this.x,y:this.y,rot:rotation } );
					i = enemyBullets.length + 1;
					this.shootTimer = 0;
				}
			}
		}
		++this.moveTimer;
		// TODO: Fix random movement, maybe to movetimer = movetimer * random
		if( this.moveTimer < this.moveTimerMax )
		{
			// this.x += this.randMoveVX;
			// this.y += this.randMoveVY;
			this.x += this.vx;
			this.y -= this.vy;
		}
		else if( this.moveTimer > this.moveTimerMax * 2 )
		{
			this.moveTimer = 0;
		}
		if( this.HP < 1 )
		{
			ScreenShake();
			// scoreAdd += 200;
			scoreAdd += Random( 100,170 );
			this.SpawnGold( Random( 1,4 ) );
			this.Respawn();
		}
		if( this.x + this.w < 0 )
		{
			this.Respawn();
		}
	}
	Draw()
	{
		if( this.x > 0 - this.w && this.x < this.cWidth &&
			this.y > 0 - this.h && this.y < this.cHeight )
		{
			// Rect( this.x,this.y,this.w,this.h,this.c );
			context.drawImage( this.images[this.imageDir],this.x,this.y,this.w,this.h );
		}
		this.HPBar.Draw();
	}
	Respawn()
	{
		this.HP = this.HPORIG;
		this.x = Random( this.cWidth, this.cWidth * 2 ); // this.xORIG;
		this.y = Random( 0,this.cHeight - this.h ); // this.yORIG;
	}
	GetPos()
	{
		return( { x:this.x,y:this.y,w:this.w,h:this.h } );
	}
	SetImageDir( targetX,targetY )
	{
		this.HPBar.SetPos( this.x,this.y + this.h );
		this.HPBar.SetHP( this.HP / this.HPORIG );
		const angle = FindAngle( this.x + this.w / 2,this.y + this.h / 2,targetX,targetY );
		this.shootDir = angle;
		const min = -2;
		const max = 2;
		const rand = Random( 0,max );
		if( angle > -90 - 30 && angle < - 90 + 30)
		{
			this.imageDir = 0;
			this.vx = 0;
			this.vy = rand;
		}
		else if( angle > 90 - 30 && angle < 90 + 30 )
		{
			this.imageDir = 1;
			this.vx = 0;
			this.vy = -rand;
		}
		else if( angle > 0 - 30 && angle < 0 + 30)
		{
			this.imageDir = 3;
			this.vx = rand;
			this.vy = 0;
		}
		else if( angle > -60 && angle < -30 )
		{
			this.imageDir = 4;
			this.vx = rand;
			this.vy = rand;
		}
		else if( angle > 30 && angle < 60 )
		{
			this.imageDir = 5;
			this.vx = rand;
			this.vy = -rand;
		}
		else if( angle > 120 && angle < 150 )
		{
			this.imageDir = 6;
			this.vx = -rand;
			this.vy = -rand;
		}
		else if( angle > -150 && angle < -120 )
		{
			this.imageDir = 7;
			this.vx = -rand;
			this.vy = rand;
		}
		else if( angle > 180 - 30 || angle < -180 + 30 )
		{ //  Must come at the end because of 180 to -180 weirdness. 
			this.imageDir = 2;
			this.vx = -rand;
			this.vy = 0;
		}
	}
	Hurt( amount )
	{
		var particleNum = 0;
		const MAX_PARTICLES = Random( 1,3 );
		for( var i = 0; i < bulletParticles.length; ++i )
		{
			if( bulletParticles[i].GetInfo() && particleNum < MAX_PARTICLES )
			{
				const randX = Random( this.x,this.x + this.w / 2 );
				const randY = Random( this.y,this.y + this.h / 2 );
				const randC = "#FF" + Random( 33,77 ) + Random( 11,33 );
				bulletParticles[i].SetPos( { x:randX,y:randY,c:randC } );
				++particleNum;
			}
		}
		this.HP -= amount;
	}
	SpawnGold( amount )
	{
		var goldCounter = 0;
		const goldCounterMax = amount;
		// const goldX = this.x + this.w / 2;
		// const goldY = this.y + this.h / 2;
		const goldX = Random( this.x,this.x + this.w / 2 );
		const goldY = Random( this.y,this.y + this.h / 2 );
		golds.forEach( function( gold )
		{
			if( gold.GetInfo() && goldCounter < goldCounterMax )
			{
				gold.SetPos( { x:goldX,y:goldY } );
				++goldCounter;
			}
		});
	}
	SetPos( pos )
	{
		this.x = pos.x;
		this.y = pos.y;
	}
}