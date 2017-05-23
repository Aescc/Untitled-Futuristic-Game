class Bullet
{
	constructor( cWidth,cHeight )
	{
		this.x = 5000;
		this.y = 5000;
		this.w = 15;
		this.h = 15;
		this.c = "#F00";
		this.s = 20;
		this.rot = 0;
		this.isUsable = false;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
	}
	Update()
	{
		this.isUsable = false;
		const vx = this.s * Math.cos( this.rot * Math.PI / 180 );
		const vy = this.s * Math.sin( this.rot * Math.PI / 180 );
		this.x += vx;
		this.y += vy;
		if( this.x > 0 && this.x < this.cWidth &&
		this.y > 0 && this.y < this.cHeight )
		{
			
		}
		else
		{
			this.isUsable = true;
		}
	}
	Draw()
	{
		Rect( this.x,this.y,this.w,this.h,this.c );
	}
	Respawn()
	{
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
		this.x = pos.x;
		this.y = pos.y;
		this.rot = pos.rot;
	}
}