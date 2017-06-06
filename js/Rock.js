class Rock
{
	constructor( x,y,moveType,cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = 5000;
		this.y = 5000;
		this.xORIG = x;
		this.yORIG = y;
		this.w = 40;
		this.h = 40;
		this.HP = 3;
		this.HPORIG = this.HP;
		this.moveType = moveType;
		// this.c = "#630";
		this.c = "#55F";
		this.isUsable = false;
		this.scrollVX = scrollVX;
		this.scrollVY = scrollVY;
		this.vx = -5;
		this.vy = 0;
		this.cWidth = cWidth - this.w;
		this.cHeight = cHeight - this.w;
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
	}
	Init()
	{
		this.images[0].src = "images/plane/plane0.png";
		this.images[1].src = "images/plane/plane1.png";
		this.images[2].src = "images/plane/plane2.png";
		this.images[3].src = "images/plane/plane3.png";
		this.images[4].src = "images/plane/plane4.png";
		this.images[5].src = "images/plane/plane5.png";
		this.images[6].src = "images/plane/plane6.png";
		this.images[7].src = "images/plane/plane7.png";
	}
	Update()
	{
		if( this.x + this.w > 0 && this.y + this.h > 0)
		{
			this.isUsable = false;
			this.x += this.scrollVX;
			this.y += this.scrollVY;
			if( this.moveType === 0 )
			{
				this.x += this.vx;
				this.y += this.vy;
			}
			else if( this.moveType === 1 )
			{
				this.x += this.vx;
				// this.y = Math.sin( this.x ) * this.cHeight / 20 + this.cHeight / 2;
				this.y = this.cHeight / 5 * Math.sin( this.x / 50 ) + this.cHeight / 2;
			}
			else if( this.moveType === 2 )
			{
				this.x += this.vx;
				this.y = 50 * Math.log( this.x );
			}
		}
		else
		{
			// this.Respawn();
			this.x = -100;
			this.isUsable = true;
		}
		if( this.HP < 1 )
		{
			// this.Respawn();
			this.SpawnGold( Random( 0,2 ) );
			this.SpawnParticles( Random( 4,9 ) );
			this.HP = this.HPORIG;
			this.x = -100;
			this.isUsable = true;
		}
		if( this.x < 0 - 1000 )
		{
			this.Respawn();
		}
		// Update Image Direction.
		{
			const offset = 30;
			if( this.y < 321 && this.y > 230 + offset )
				this.imageDir = 7;
			else if( this.y < 230 + offset && this.y > 230 - offset )
				this.imageDir = 2;
			else if( this.y < 230 - offset && this.y > 138 )
				this.imageDir = 6;
		}
	}
	Draw()
	{
		// Rect( this.x,this.y,this.w,this.h,this.c );
		context.drawImage( this.images[this.imageDir],this.x,this.y,this.w,this.h );
	}
	Respawn()
	{
		this.HP = this.HPORIG;
		/*
		var goldCounter = 0;
		const goldCounterMax = 3;
		const goldX = this.x;
		const goldY = this.y;
		golds.forEach( function( gold )
		{
			if( gold.GetInfo() && goldCounter < goldCounterMax )
			{
				gold.SetPos( { x:goldX,y:goldY } );
				++goldCounter;
			}
		});
		*/
		this.x = this.xORIG; // Random( 0,this.cWidth ) + this.cWidth;
		this.y = this.yORIG; // Random( 0,this.cHeight - this.h );
		// this.moveType = Random( 0,2 );
	}
	SpawnGold( amount )
	{
		var goldCounter = 0;
		const goldCounterMax = amount;
		const goldX = this.x;
		const goldY = this.y;
		golds.forEach( function( gold )
		{
			if( gold.GetInfo() && goldCounter < goldCounterMax )
			{
				gold.SetPos( { x:goldX,y:goldY } );
				++goldCounter;
			}
		});
	}
	SpawnParticles( amount )
	{
		var particleCounter = 0;
		const particleCounterMax = amount;
		const particleX = this.x + this.w / 2;
		const particleY = this.y + this.h / 2;
		const particleC = this.c;
		particles.forEach( function( particle )
		{
			if( particle.GetInfo() && particleCounter < particleCounterMax )
			{
				particle.SetPos( { x:particleX,y:particleY,c:particleC } );
				++particleCounter;
			}
		} );
	}
	GetPos()
	{
		return {
			x:this.x,
			y:this.y,
			w:this.w,
			h:this.h,
			HP:this.HP
		}
	}
	GetUsable()
	{
		return this.isUsable;
	}
	Hurt( amount )
	{
		this.HP -= amount;
	}
}
