This example demonstrates a common issue when using union types in TypeScript involving null and undefined.  The function `greet` accepts either a string or null, but passing `undefined` results in a runtime error despite the seemingly comprehensive type definition. The solution involves explicitly handling the undefined case.