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
	}
	Update()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
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
	}
}