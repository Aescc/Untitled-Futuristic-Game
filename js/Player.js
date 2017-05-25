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
	}
	InitImages()
	{
		this.images[0].src = "images/player/player0.png";
		this.images[1].src = "images/player/player1.png";
		this.images[2].src = "images/player/player2.png";
		this.images[3].src = "images/player/player3.png";
		// TODO: Add the remaining player sprites for different directions.
		this.images[4].src = "images/player/player4.png";
		this.images[5].src = "images/player/player5.png";
		this.images[6].src = "images/player/player6.png";
		this.images[7].src = "images/player/player7.png";
	}
	Move( dir )
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
		// Rect( this.x,this.y,this.w,this.h,this.c );
		context.drawImage( this.images[this.imageDir],this.x,this.y,this.w,this.h );
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
	SetImageDir( mouseX,mouseY )
	{
		const angle = FindAngle( this.x + this.w / 2,this.y + this.h / 2,mouseX,mouseY );
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