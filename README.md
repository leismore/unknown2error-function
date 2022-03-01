# unknown2error-function
The function converts anything into an object of Error (or subclasses) class. If `error` is an object of Error (or subclasses) class, it returns the original `error` object. With any other type, it will convert it into a string first and then an Error object will be created and returned by using the string as the message parameter.
