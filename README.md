# Function unknown2error

## Why

```javascript
try {
    throw anything;
} catch(e) {
    // e = anything
}
```

In JavaScript, for the variable `e`, there is no guarantee that `e` will be an Error object, although `e` should be an Error object, is generally considered as a best practice. To make it worse, in TypeScript, the `e` is treated as `Unknown` type in the strict mode, which enforces developers to write extra conditional statements in every `catch` block.

This package is designed to provide an elegant solution for this issue.

## Installation

`npm install @leismore/unknown2error`

## Test

`npm test`

## Example

```typescript
import { unknown2error } from '@leismore/unknown2error';

try {
    // ...
}
catch(error) {
    error = unknown2error(error); // error guaranteed to be an Error (or subclass) object
}
```

## API

```typescript
function unknown2error( error: any ): Error
```

The function converts anything into an object of Error (or subclasses) class. If `error` is an object of Error (or subclasses) class, it returns the original `error` object. With any other type, it will convert it into a string first and then an Error object will be created and returned by using the string as the message parameter.

## Copyright

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initialised on 01 March 2022)

## References

* MDN Web Docs: Error <https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error>
* Announcing TypeScript 4.4 - Defaulting to the unknown Type in Catch Variables <https://devblogs.microsoft.com/typescript/announcing-typescript-4-4/#use-unknown-catch-variables>
