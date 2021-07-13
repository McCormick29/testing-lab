const { expect } = require('@jest/globals')
const { returnTwo, greeting, add, subtract, multiply, divide } = require('./function')

test(`Should return two`, () => {
    expect(returnTwo()).toBe(2)
});
test(`Should return "Hello, {name}"`, () => {
    expect(greeting('levi')).toBe('Hello, levi')
});
test(`Should return "{num1} + {num2}"`, () => {
    expect(add(2, 2)).toBe(4)
});
test(`Should return "{num1} - {num2}"`, () => {
    expect(subtract(2, 2)).toBe(0)
});
test(`Should return "{num1} * {num2}"`, () => {
    expect(multiply(2, 2)).toBe(4)
});
test(`Should return "{num1} / {num2}"`, () => {
    expect(divide(2, 2)).toBe(1)
});