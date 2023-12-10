/**
 * @class Person
 * @classdesc A person class
 * @param {string} name - The name of the person
 * 
 */
class Person {
    /**
     * Person parameters
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Greet the person
     * @returns {string}
     */
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

/**
 * See {@link Person}
 */
const john = new Person("John Doe");