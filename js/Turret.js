class Turret
{
	constructor( x,y,cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = x;
		this.y = y;
		this.w = 40;
		this.h = 40;
		this.c = "#1050D0";
		this.scrollVX = scrollVX;
		this.scrollVY = scrollVY;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
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
	InitImages()
	{
		
	}
	Update()
	{
		this.x += this.scrollVX;
		this.y += this.scrollVY;
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
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
	SetImageDir( targetX,targetY )
	{
		const angle = FindAngle( this.x + this.w / 2,this.y + this.h / 2,targetX,targetY );
		if( angle > -90 - 30 && angle < - 90 + 30)
		{
			this.imageDir = 0;
		}
		else if( angle > 90 - 30 && angle < 90 + 30 )
		{
			this.imageDir = 1;
		}
		else if( angle > 0 - 30 && angle < 0 + 30)
		{
			this.imageDir = 3;
		}
		else if( angle > -60 && angle < -30 )
		{
			this.imageDir = 4;
		}
		else if( angle > 30 && angle < 60 )
		{
			this.imageDir = 5;
		}
		else if( angle > 120 && angle < 150 )
		{
			this.imageDir = 6;
		}
		else if( angle > -150 && angle < -120 )
		{
			this.imageDir = 7;
		}
		else if( angle > 180 - 30 || angle < -180 + 30 )
		{ //  Must come at the end because of 180 to -180 weirdness. 
			this.imageDir = 2;
		}
	}
}