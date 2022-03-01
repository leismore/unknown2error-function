import { assert }        from 'chai';
import { unknown2error } from '../src/index';

class AnotherError extends Error {}
const anotherError = new AnotherError('Another Error');
const aError       = new Error('An Error');

const aBool      = true;
const bBool      = false;
const aNull      = null;
const aUndefined = undefined;
const aNumber    = 584587952.548756;
const aString    = 'This is a piece of random text.';
const aObject    = new Date();

describe( 'Function unknown2error Testing', function(){

    it( 'Trying with an Error', function(){
        assert( unknown2error(aError) === aError );
    });

    it( 'Trying with another Error', function(){
        assert( unknown2error(anotherError) === anotherError );
    });

    it( 'Trying with a bool (true)', function(){
        assert( ( unknown2error(aBool) instanceof Error ) &&
                ( unknown2error(aBool).message === String(aBool) )
        );
    });

    it( 'Trying with another bool (false)', function(){
        assert( ( unknown2error(bBool) instanceof Error ) &&
                ( unknown2error(bBool).message === String(bBool) )
        );
    });

    it( 'Trying with a null', function(){
        assert( ( unknown2error(aNull) instanceof Error ) &&
                ( unknown2error(aNull).message === String(aNull) )
        );
    });

    it( 'Trying with a undefined', function(){
        assert( ( unknown2error(aUndefined) instanceof Error ) &&
                ( unknown2error(aUndefined).message === String(aUndefined) )
        );
    });

    it( 'Trying with a number', function(){
        assert( ( unknown2error(aNumber) instanceof Error ) &&
                ( unknown2error(aNumber).message === String(aNumber) )
        );
    });

    it( 'Trying with a string', function(){
        assert( ( unknown2error(aString) instanceof Error ) &&
                ( unknown2error(aString).message === String(aString) )
        );
    });

    it( 'Trying with an object', function(){
        assert( ( unknown2error(aObject) instanceof Error ) &&
                ( unknown2error(aObject).message === String(aObject) )
        );
    });

});
