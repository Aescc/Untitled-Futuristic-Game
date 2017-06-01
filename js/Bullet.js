class Bullet
{
	constructor( cWidth,cHeight,type )
	{
		this.x = 5000;
		this.y = 5000;
		this.w = 40;
		this.h = 40;
		this.c = "#F00";
		this.s = 20;
		this.rot = 0;
		this.timer = 0;
		this.timerMax = 15;
		this.isUsable = false;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
		this.image = new Image();
		this.type = type;
		this.sound = new Audio( "audio/pew.wav");
	}
	InitImages()
	{
		if( this.type === 0 )
		{
			this.image.src = "images/bullet/bullet0.png";
			this.s = 20;
			this.timerMax = 15;
		}
		else if( this.type === 1 )
		{
			this.image.src = "images/bullet/bullet1.png";
			this.s = 5;
			this.timerMax = 250;
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
}