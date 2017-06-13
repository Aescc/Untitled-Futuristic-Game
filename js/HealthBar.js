class HealthBar
{
	constructor()
	{
		var x = 0;
		var y = 0;
		const width = 50;
		const height = 2;
		var hp = 50;
		this.Draw = function()
		{
			// Rect( x - 1,y - 1,width + 2,height + 2,"#000" );
			Rect( x,y,width,height,"#F00" );
			Rect( x,y,hp,height,"#0F0" );
		}
		this.SetHP = function( amount )
		{
			hp = Math.floor( amount * width );
		}
		this.SetPos = function( in_x,in_y )
		{
			x = in_x;
			y = in_y + 5;
		}
	}
}