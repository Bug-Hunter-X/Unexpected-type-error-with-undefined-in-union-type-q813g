function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

greet(null); // Works fine
greet(undefined); // This will throw an error because undefined is not assignable to string | null