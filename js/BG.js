class BG
{
	constructor( cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = 0;
		this.y = 0;
		this.w = cWidth * 5;
		this.h = cHeight;
		this.scrollVX = scrollVX;
		this.scrollVY = scrollVY;
		this.colorMap = 
		[
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[]
		];
	}
	Generate()
	{
		for( var i = 0; i < this.h / 10; ++i )
		{
			for( var j = 0; j < this.w / 10; ++j )
			{
				const R = Random( 11,22 );
				const G = Random( 55,99 );
				const B = Random( 22,44 );
				var color = "#" + R + G + B;
				if( !Random( 0,50 ) )
				{
					color = "#A0522D";
				}
				// Rect( j * 10,i * 10,10,10,color );
				this.colorMap[i][j] = color;
			}
		}
	}
	Update()
	{
		// TODO: Make this transition seamless somehow; maybe try the generation code.
		if( this.x > -3200 )
		{
			this.x += this.scrollVX;
			this.y += this.scrollVY;
		}
		else
		{
			this.x = 0;
		}
	}
	Draw()
	{
		for( var i = 0; i < this.colorMap.length; ++i )
		{
			for( var j = 0; j < this.colorMap[i].length; ++j )
			{
				Rect( this.x + j * 10,this.y + i * 10,10,10,this.colorMap[i][j] );
			}
		}
	}
}