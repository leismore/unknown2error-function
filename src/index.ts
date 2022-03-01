/**
 * Function unknown2error - Convert anything into an Error (or subclasses of Error) object.
 */

function unknown2error( anything:any ): Error
{
    if ( anything instanceof Error === true )
    {
        return anything;
    }
    else
    {
        return new Error( String(anything) );
    }
}

export { unknown2error };
