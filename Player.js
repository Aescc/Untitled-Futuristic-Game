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
	SetPos( pos )
	{
		this.x = pos.x;
		this.y = pos.y;
	}
}