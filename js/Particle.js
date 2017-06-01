class Particle
{
	constructor( cWidth,cHeight,scrollVX,scrollVY,w = 5,h = 5 )
	{
		this.x = 5000;
		this.y = 5000;
		this.w = w;
		this.h = h;
		this.c = "#FF" + Random( 11,22 ) + Random( 11,22 );
		this.a = 1.0;
		this.vx = scrollVX;
		this.vy = scrollVY;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
		this.isUsable = true;
		this.randomMoveCounter = 0;
		this.randomMoveCounterMax = 20;
		this.randomMoveVX = Random( -3,3 );
		this.randomMoveVY = Random( -3,3 );
	}
	Update()
	{
		this.x += this.vx;
		this.y += this.vy;
		if( this.randomMoveCounter < this.randomMoveCounterMax )
		{
			this.x += this.randomMoveVX;
			this.y += this.randomMoveVY;
			++this.randomMoveCounter;
			if( this.a > 0.1 )
			{
				this.a -= 0.05;
			}
		}
		else
		{
			this.Respawn();
		}
	}
	Draw()
	{
		Rect( this.x - 1,this.y - 1,this.h + 2,this.w + 2,"#000",this.a );
		Rect( this.x,this.y,this.w,this.h,this.c,this.a );
	}
	Respawn()
	{
		this.x = 5000;
	}
	GetInfo()
	{
		if( this.x < 0 || this.x > this.cWidth ||
			this.y < 0 || this.y > this.cWidth )
		{
			this.isUsable = true;
		}
		else
		{
			this.isUsable = false;
		}
		return this.isUsable;
	}
	SetPos( pos )
	{
		this.x = pos.x;
		this.y = pos.y;
		this.c = pos.c;
		this.randomMoveCounter = 0;
		this.a = 1.0;
	}
}