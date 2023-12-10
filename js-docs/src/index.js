/** @type {string} */
const studentName = "John Doe"; 

/** @type {string[]} */
const myArray = ["John", "Jane", "Jack"];

/** @typedef {Object} Student 
 * @property {string} name
 * @property {number} age
 * @property {string[]} subjects
*/

/** @type {Student} */
const mark = {
    name: "Mark",
    age: 20,
    subjects: ["Math", "English"]
};

import * as Types from './typedefs.js';

/** @type {Types.MyType} */
const myVar = { name: "John", description: 'what' };