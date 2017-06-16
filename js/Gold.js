class Gold
{
	constructor( cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = 5000;
		this.y = 5000;
		this.w = 10;
		this.h = 10;
		this.c = "#FFDF00";
		this.vx = scrollVX;
		this.vy = scrollVY;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
		this.isUsable = true;
		this.randomMoveCounter = 0;
		this.randomMoveCounterMax = 5;
		this.randomMoveVX = Random( -5,5 );
		this.randomMoveVY = Random( -5,5 );
		this.a = 1.0;
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
		}
		else
		{
			
		}
		if( this.a >= 0.003 )
			this.a -= 0.01 * Math.random();
		else
			this.Respawn();
	}
	Draw()
	{
		// Rect( this.x - 1,this.y - 1,this.w + 2,this.h + 2,"#000" );
		Rect( this.x,this.y,this.w,this.h,this.c,this.a );
	}
	Respawn()
	{
		this.a = 1.0;
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
		this.randomMoveCounter = 0;
		this.a = 1.0;
	}
}