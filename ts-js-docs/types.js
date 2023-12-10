/** @type {string} */
let myString = 'Hello World';

/** @type {{ a: string, b: string }} */
let myObject = { a: 'Hello', b: 'World' };

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {Date} [createdAt]
 */

/** @type {User} */
const user = {
    name: 'John Doe',
    age: 30,
    createdAt: new Date()
    };

/** @type {string|number} */
const stringOrNumber = true ? 'Hello' : 123;


/** @type {*} */
const anyVariable = 'Hello World';

// Functions

/**
 * Function to concatenate two strings
 * @param {string} word1 
 * @param {string} [word2] 
 * @returns {string}
 */
function joinMyWords(word1, word2) {
    return word1 + (word2 || '');
}

/**
 * Function to add all numbers in an array
 * @param {number[]} nums array of numbers to add
 * @return {number}
 */
function addAllNums(nums) {
    return nums.reduce((a, b) => a + b, 0);
}

/** @type {(price: number, addTax: boolean) => number} */
const addTax = (price, addTax) => addTax ? price * 1.2 : price;