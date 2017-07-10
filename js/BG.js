class BG
{
	constructor( cWidth,cHeight,scrollVX,scrollVY )
	{
		this.x = 0;
		this.y = 0;
		this.w = cWidth * 5;
		this.h = cHeight;
		this.cWidth = cWidth;
		this.cHeight = cHeight;
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
		this.colorMapTransition = 
		[
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[],
			[],[],[],[],[],[],[],[],[],[]
		];
		this.isShaking = false;
		this.SHAKE_MAX = 2; // How long to move in 1 direction before changing directions.
		this.shakeTimer = SHAKE_MAX;
		this.intensity = 2;
		this.shakeVX = Random( -this.intensity,this.intensity );
		this.shakeVY = Random( -this.intensity,this.intensity );
		this.X_ORIG = 0;
		this.Y_ORIG = 0;
		this.REAL_X = 0;
		this.REAL_Y = 0;
	}
	Generate()
	{
		// TODO: Add lakes, rivers, or some other type of water.
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
				this.colorMapTransition[i][j] = color;
			}
		}
		this.GenerateWater();
	}
	GenerateWater()
	{
		const waterColor = "#00AAFF";
		var randPlaceX = Random( 0,this.colorMap[0].length - 1 );
		var randPlaceY = Random( 0,this.colorMap.length - 1 );
		// this.colorMap[randPlaceY][randPlaceX] = waterColor;
	}
	Update()
	{
		if( this.x > -3200 )
		{
			this.x += this.scrollVX;
			this.y += this.scrollVY;
		}
		else
		{
			this.x = this.cWidth;
		}
		if( this.isShaking )
		{
			if( !this.hasShaken )
			{
				this.X_ORIG = this.x;
				this.Y_ORIG = this.y;
			}
			if( this.shakeTimer > this.SHAKE_MAX )
			{
				this.shakeTimer = 0;
				this.shakeVX = Random( -this.intensity,this.intensity );
				this.shakeVY = Random( -this.intensity,this.intensity );
				this.x = this.X_ORIG;
				this.y = this.Y_ORIG;
				this.hasShaken = false;
			}
			else
			{
				++this.shakeTimer;
				this.x += this.shakeVX;
				this.y += this.shakeVY;
				this.hasShaken = true;
			}
		}
	}
	Draw()
	{
		for( var i = 0; i < this.colorMap.length; ++i )
		{
			for( var j = 0; j < this.colorMap[i].length; ++j )
			{
				const drawX = this.x + j * 10;
				const drawY = this.y + i * 10;
				if( drawX > -10 && drawX < this.cWidth &&
					drawY > -10 && drawY < this.cHeight )
				{
					Rect( drawX,drawY,10,10,this.colorMap[i][j] );
				}
			}
		}
		for( var i = 0; i < this.colorMapTransition.length; ++i )
		{
			for( var j = 0; j < this.colorMapTransition[i].length; ++j )
			{
				const drawX = this.x - this.w + j * 10;
				const drawY = this.y + i * 10;
				if( drawX > -10 && drawX < this.cWidth &&
					drawY > -10 && drawY < this.cHeight )
				{
					Rect( drawX,drawY,10,10,this.colorMap[i][j] );
				}
			}
		}
	}
	Shake( willShake,intensity )
	{
		this.intensity = intensity;
		this.isShaking = willShake;
		if( willShake )
		{
			this.REAL_X = this.x;
			this.REAL_Y = this.y;
		}
		else
		{
			this.x = this.REAL_X;
			this.y = this.REAL_Y;
		}
	}
}