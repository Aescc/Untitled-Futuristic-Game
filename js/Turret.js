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
}