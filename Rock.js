class Rock
{
	constructor( cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = 5000;
		this.y = 5000;
		this.w = 50;
		this.h = 50;
		this.c = "#630";
		this.vx = scrollVX;
		this.vy = scrollVY;
		this.cWidth = cWidth - this.w;
		this.cHeight = cHeight - this.w;
	}
	Update()
	{
		if( this.x + this.w > 0 && this.y + this.h > 0)
		{
			this.x += this.vx;
			this.y += this.vy;
		}
		else
		{
			this.Respawn();
		}
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
	}
	Respawn()
	{
		var goldCounter = 0;
		const goldCounterMax = 2;
		const goldX = this.x;
		const goldY = this.y;
		golds.forEach( function( gold )
		{
			if( gold.GetInfo() && goldCounter < goldCounterMax )
			{
				gold.SetPos( { x:goldX,y:goldY } );
				++goldCounter;
			}
		});
		this.x = Random( 0,this.cWidth ) + this.cWidth;
		this.y = Random( 0,this.cHeight ) + this.cHeight;
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
}