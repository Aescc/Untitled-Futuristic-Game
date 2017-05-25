class Rock
{
	constructor( x,y,moveType,cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = 5000;
		this.y = 5000;
		this.xORIG = x;
		this.yORIG = y;
		this.w = 50;
		this.h = 50;
		this.HP = 3;
		this.HPORIG = this.HP;
		this.moveType = moveType;
		// this.c = "#630";
		this.c = "#555";
		this.scrollVX = scrollVX;
		this.scrollVY = scrollVY;
		this.vx = -5;
		this.vy = 0;
		this.cWidth = cWidth - this.w;
		this.cHeight = cHeight - this.w;
	}
	Update()
	{
		if( this.x + this.w > 0 && this.y + this.h > 0)
		{
			this.x += this.scrollVX;
			this.y += this.scrollVY;
			if( this.moveType === 0 )
			{
				this.x += this.vx;
				this.y += this.vy;
			}
			else if( this.moveType === 1 )
			{
				this.x += this.vx;
				// this.y = Math.sin( this.x ) * this.cHeight / 20 + this.cHeight / 2;
				this.y = this.cHeight / 5 * Math.sin( this.x / 50 ) + this.cHeight / 2;
			}
			else if( this.moveType === 2 )
			{
				this.x += this.vx;
				this.y = 50 * Math.log( this.x );
			}
		}
		else
		{
			// this.Respawn();
		}
		if( this.HP < 1 )
		{
			// this.Respawn();
		}
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
	}
	Respawn()
	{
		this.HP = this.HPORIG;
		var goldCounter = 0;
		const goldCounterMax = 3;
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
		// this.x = Random( 0,this.cWidth ) + this.cWidth;
		// this.y = Random( 0,this.cHeight );
		this.x = this.xORIG;
		this.y = this.yORIG;
	}
	GetPos()
	{
		return {
			x:this.x,
			y:this.y,
			w:this.w,
			h:this.h,
			HP:this.HP
		}
	}
	Hurt( amount )
	{
		this.HP -= amount;
	}
}