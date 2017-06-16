class Player
{
	constructor( x,y )
	{
		this.x = x;
		this.y = y;
		this.xORIG = this.x;
		this.yORIG = this.y;
		this.w = 40;
		this.h = 40;
		this.c = "#0FF";
		this.s = 5;
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
		this.imageDir = 3;
		this.flameX = this.x;
		this.flameY = this.y;
		this.HP = 10;
		this.HPORIG = 10;
		this.HPBar = new HealthBar();
		this.deathCounter = 0;
		this.deathCounterMax = 70;
	}
	InitImages()
	{
		this.images[0].src = "images/player/player0.png";
		this.images[1].src = "images/player/player1.png";
		this.images[2].src = "images/player/player2.png";
		this.images[3].src = "images/player/player3.png";
		this.images[4].src = "images/player/player4.png";
		this.images[5].src = "images/player/player5.png";
		this.images[6].src = "images/player/player6.png";
		this.images[7].src = "images/player/player7.png";
	}
	Update()
	{
		var particleNum = 0;
		const MAX_PARTICLES = Random( 0,1 );
		for( var i = 0; i < particles.length; ++i )
		{
			if( particles[i].GetInfo() && particleNum < MAX_PARTICLES )
			{
				// const randX = Random( this.x,this.x + this.w / 2 );
				// const randY = Random( this.y,this.y + this.h / 2 );
				const randColor = "#FF" + Random( 33,77 ) + Random( 11,33 );
				particles[i].SetPos( { x:this.flameX,y:this.flameY,c:randColor } );
				++particleNum;
			}
		}
		if( this.HP <= 0 )
		{
			var particleNum = 0;
			const MAX_PARTICLES = Random( 5,15 );
			for( var i = 0; i < bulletParticles.length; ++i )
			{
				if( bulletParticles[i].GetInfo() && particleNum < MAX_PARTICLES )
				{
					const randX = Random( this.x,this.x + this.w / 2 );
					const randY = Random( this.y,this.y + this.h / 2 );
					const randRGB = Random( 44,99 );
					var randC = "#" + randRGB + randRGB + randRGB;
					if( !Random( 0,7 ) )
						randC = "#" + Random( 11,22 ) + "DDFF";
					bulletParticles[i].SetPos( { x:randX,y:randY,c:randC } );
					++particleNum;
				}
			}
			if( this.deathCounter > this.deathCounterMax )
			{
				this.HP = this.HPORIG;
				this.deathCounter = 0;
				Init();
			}
			else
				++this.deathCounter;
		}
		this.HPBar.SetPos( this.x,this.y + this.h );
		this.HPBar.SetHP( this.HP / this.HPORIG );
	}
	Move( dir )
	{
		if( this.HP > 0 )
		{
			if( dir === 0 )
			{
				this.y -= this.s;
			}
			else if( dir === 1 )
			{
				this.y += this.s;
			}
			else if( dir === 2 )
			{
				this.x -= this.s;
			}
			else if( dir === 3 )
			{
				this.x += this.s;
			}
		}
	}
	CheckBounds( dir,limit ) // True means inside bounds.
	{
		if( dir === 0 && this.y < 0 )
		{
			// this.y += this.s;
			return false;
		}
		else if( dir === 1 && this.y > limit )
		{
			// this.y -= this.s;
			return false;
		}
		else if( dir === 2 && this.x < 0 )
		{
			// this.x += this.s;
			return false;
		}
		else if( dir === 3 && this.x > limit )
		{
			// this.x -= this.s;
			return false;
		}
		return true;
	}
	Draw()
	{
		if( this.HP > 0 )
		{
			context.drawImage( this.images[this.imageDir],this.x,this.y,this.w,this.h );
			this.HPBar.Draw();
		}
	}
	GetPos()
	{
		return {
			x:this.x,
			y:this.y,
			w:this.w,
			h:this.h
		}
	}
	SetPos( pos )
	{
		this.x = pos.x;
		this.y = pos.y;
	}
	Hurt( amount )
	{
		this.HP -= amount;
	}
	SetImageDir( mouseX,mouseY )
	{
		const angle = FindAngle( this.x + this.w / 2,this.y + this.h / 2,mouseX,mouseY );
		const offset = 10;
		if( angle > -90 - 30 && angle < - 90 + 30)
		{
			this.imageDir = 0;
			this.flameX = Random( this.x,this.x + this.w );
			this.flameY = this.y + this.h + Random( -offset,offset );
		}
		else if( angle > 90 - 30 && angle < 90 + 30 )
		{
			this.imageDir = 1;
			this.flameX = Random( this.x,this.x + this.w );
			this.flameY = this.y + Random( -offset,offset );
		}
		else if( angle > 0 - 30 && angle < 0 + 30)
		{
			this.imageDir = 3;
			this.flameX = this.x + Random( -offset,offset );
			this.flameY = Random( this.y,this.y + this.h );
		}
		else if( angle > -60 && angle < -30 )
		{
			this.imageDir = 4;
			this.flameX = this.x + Random( -offset,offset );
			this.flameY = this.y + this.h + Random( -offset,offset );
		}
		else if( angle > 30 && angle < 60 )
		{
			this.imageDir = 5;
			this.flameX = this.x + Random( -offset,offset );
			this.flameY = this.y + Random( -offset,offset );
		}
		else if( angle > 120 && angle < 150 )
		{
			this.imageDir = 6;
			this.flameX = this.x + this.w + Random( -offset,offset );
			this.flameY = this.y + Random( -offset,offset );
		}
		else if( angle > -150 && angle < -120 )
		{
			this.imageDir = 7;
			this.flameX = this.x + this.w + Random( -offset,offset );
			this.flameY = this.y + this.h + Random( -offset,offset );
		}
		else if( angle > 180 - 30 || angle < -180 + 30 )
		{ //  Must come at the end because of 180 to -180 weirdness. 
			this.imageDir = 2;
			this.flameX = this.x + this.w + Random( -offset,offset );
			this.flameY = Random( this.y,this.y + this.h );
		}
	}
	GetHP()
	{
		return this.HP;
	}
}