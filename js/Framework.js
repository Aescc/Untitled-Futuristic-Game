function Circle( x,y,size,color )
{
	context.fillStyle = color;
	context.beginPath();
	context.arc( x,y,size,0,2 * Math.PI );
	context.fill();
}

function DrawColors()
{
	var i = 500;
	while( --i )
	{
		titleColors[i] = "#" + Random( 11,33 ) + Random( 77,99 ) + "DD";
	}
}

function DrawPause()
{
	GetColor = function( num )
	{
		return titleColors[num];
	}
	var x = 140;
	var y = 300;
	var num = 1;
	// P
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PR
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRE
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRES
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;x += 10 * 4;
	// PRESS [
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS [S
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS [SP
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS [SPA
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS [SPAC
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS [SPACE
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// PRESS [SPACE]
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
}

function DrawTitle( source,offsetX,offsetY )
{
	GetColor = function( num )
	{
		// TODO: Maybe make the colors constant, idk I kinda like it as is.
		// return "#" + Random( 22,55 ) + Random( 44,99 ) + "FF";
		if( source === 0 )
			return titleColors[num];
		else if( source === 1 )
			return "#333";
		else if( source === 2 )
			return "#" + Random( 11,99 ) + Random( 11,99 ) + "EE";
	}
	var x = 20 + offsetX;
	var y = 70 + offsetY;
	var num = 1;
	// U
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UN
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNT
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTI
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTIT
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITL
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLE
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	x += 10 * 9;
	// UNTITLED F
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FU
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUT
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUTU
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUTUR
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FURUTI
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUTURIS
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUTURIST
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUTURISTI
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// UNTITLED FUTURISTIC
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	// x = 20 + 10 * 2 * 13 + offsetX;
	x -= 10 * 45;
	y += 10 * 8;
	// G
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// GA
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// GAM
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	x += 10 * 4;
	// GAME
	Rect( x + 10 * 0,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 1,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 3,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 0,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 2,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 1,y + 10 * 4,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 0,10,10,GetColor( num ) ); ++num;
	Rect( x + 10 * 2,y + 10 * 4,10,10,GetColor( num ) ); ++num;
}

function FindAngle ( x0,y0,x1,y1 )
{
	const delta_x = x1 - x0;
	const delta_y = y1 - y0;
	var theta = Math.atan2( delta_y,delta_x );
	theta *= ( 180 / Math.PI );
	return theta;
}

function FindDistance ( x0,y0,x1,y1 )
{
	const delta_x = x1 - x0;
	const delta_y = y1 - y0;
	const distance = Math.sqrt( ( delta_x * delta_x ) + ( delta_y * delta_y ) );
	return distance;
}

function HitTest( x0,y0,w0,h0,x1,y1,w1,h1 )
{
	if( x0 < x1 + w1 && x0 + w0 > x1 &&
		y0 < y1 + h1 && y0 + h0 > y1)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function Random( min,max )
{
	if( min > max )
	{
		const temp = max;
		max = min;
		min = temp;
	}
	const randomNumber = Math.floor( Math.random() * ( 1 + max - min ) ) + min;
	return randomNumber;
}

function Rect( x,y,width,height,color,alpha = 1.0 )
{
	if( alpha === 1.0 )
	{
		context.fillStyle = color;
		context.fillRect( x,y,width,height );
	}
	else
	{
		context.globalAlpha = alpha;
		context.fillStyle = color;
		context.fillRect( x,y,width,height );
		context.globalAlpha = 1;
	}
}

function SetVol()
{
	soundBar.SetPos( { x:mouse.x } );
	const vol = soundBar.GetVol();
	ouch.volume = vol;
	bullets.forEach( function( b )
	{
		b.SetVol( vol );
	} );
	enemyBullets.forEach( function( eB )
	{
		eB.SetVol( vol );
	} );
}

function Text( x,y,message,color,font )
{
	context.fillStyle = color;
	context.font = font;
	context.fillText( message,x,y );
}
