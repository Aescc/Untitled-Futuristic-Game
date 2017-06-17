class SoundBar
{
	constructor( in_x,in_y )
	{
		const x = in_x;
		const y = in_y;
		const BAR_WIDTH = 200;
		const ballW = 20;
		const ballH = 20;
		var ballX = x + BAR_WIDTH / 2;
		var ballY = y - ballW / 4;
		this.Update = function()
		{
		}
		this.Draw = function()
		{
			Rect( x,y,BAR_WIDTH,10,"#FFF" );
			Rect( ballX,ballY,ballW,ballH,"#0FF" );
		}
		this.GetPos = function()
		{
			return {
				x:	ballX,
				y:	ballY,
				w:	ballW,
				h:	ballH
			}
		}
		this.GetVol = function()
		{
			const MIN_VOL = 0.001;
			const vol = ( ballX - x ) / BAR_WIDTH;
			if( vol >= MIN_VOL )
				return vol;
			else
				return MIN_VOL;
		}
		this.SetPos = function( pos )
		{
			if( pos.x > x && pos.x < x + BAR_WIDTH )
				ballX = pos.x - ballW / 2;
		}
	}
}