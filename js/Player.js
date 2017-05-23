class Player
{
	constructor( x,y )
	{
		this.x = x;
		this.y = y;
		this.xORIG = this.x;
		this.yORIG = this.y;
		this.w = 30;
		this.h = 30;
		this.c = "#0FF";
		this.s = 5;
		this.images =
		[
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
		const angle = FindAngle( this.x,this.y,mouseX,mouseY );
		if( angle < -35 && angle > -135 )
		{
			this.imageDir = 0;
		}
		else if( angle < 135 && angle > 35 )
		{
			this.imageDir = 1;
		}
		else if( angle < 35 && angle > -35  )
		{
			this.imageDir = 3;
		}
		else
		{
			this.imageDir = 2;
		}
	}
}