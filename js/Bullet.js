class Bullet
{
	constructor( cWidth,cHeight,type )
	{
		this.x = 5000;
		this.y = 5000;
		this.w = 20;
		this.h = 20;
		this.c = "#FF0000"; // Particle color.
		this.s = 20;
		this.rot = 0;
		this.timer = 0;
		this.timerMax = 15;
		this.isUsable = false;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
		this.image = new Image();
		this.type = type;
		this.sound = new Audio( "audio/pew0.wav" );
	}
	InitImages()
	{
		if( this.type === 0 )
		{
			this.image.src = "images/bullet/bullet0.png";
			this.s = 20;
			this.timerMax = 15;
			this.sound = new Audio( "audio/pew1.wav" );
			this.c = "#FF" + Random( 11,44 ) + Random( 11,22 );
		}
		else if( this.type === 1 )
		{
			this.image.src = "images/bullet/bullet1.png";
			this.s = 5;
			this.timerMax = 500;
			this.sound = new Audio( "audio/pew0.wav" );
			this.c = "#" + Random( 11,44 ) + "FF" + Random( 11,22 );
		}
	}
	Update()
	{
		const vx = this.s * Math.cos( this.rot * Math.PI / 180 );
		const vy = this.s * Math.sin( this.rot * Math.PI / 180 );
		this.x += vx;
		this.y += vy;
		if( this.x > 0 && this.x < this.cWidth &&
		this.y > 0 && this.y < this.cHeight )
		{
			this.isUsable = false;
			if( this.timer > this.timerMax )
			{
				this.Respawn();
			}
			else
			{
				++this.timer;
			}
		}
		else
		{
			this.isUsable = true;
		}
		var particleNum = 0;
		const MAX_PARTICLES = Random( 0,1 );
		if( Random( 0,2 ) )
		{
			++particleNum;
		}
		for( var i = 0; i < bulletParticles.length; ++i )
		{
			if( bulletParticles[i].GetInfo() && particleNum < MAX_PARTICLES )
			{
				const randX = Random( this.x,this.x + this.w );
				const randY = Random( this.y,this.y + this.h );
				bulletParticles[i].SetPos( { x:randX,y:randY,c:this.c } );
				++particleNum;
			}
		}
	}
	Draw()
	{
		// Rect( this.x,this.y,this.w,this.h,this.c );
		context.drawImage( this.image,this.x,this.y,this.w,this.h );
	}
	Respawn()
	{
		// TODO: Move particle generation to tank/turret objects.
		var particleNum = 0;
		const MAX_PARTICLES = Random( 2,5 );
		for( var i = 0; i < bulletParticles.length; ++i )
		{
			if( bulletParticles[i].GetInfo() && particleNum < MAX_PARTICLES )
			{
				// bulletParticles[i].SetPos( { x:this.x,y:this.y } );
				++particleNum;
			}
		}
		this.x = 5000;
	}
	GetUsable()
	{
		return this.isUsable;
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
		this.sound.currentTime = 0;
		this.sound.play();
		this.timer = 0;
		this.x = pos.x;
		this.y = pos.y;
		this.rot = pos.rot;
	}
	SetVol( vol )
	{
		this.sound.volume = vol;
	}
}