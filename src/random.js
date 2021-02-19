
// const person = {
//     name: 'Ihar',
//     age: 30,
//     sayHi: function() {
//         console.log('Hi')
//     }
//    };

//    Object.prototype.sayHello = function() {
//        console.log('Hello')
//    }

//    const victor = Object.create(person);


//    console.log(victor)

//    const ihar = {};
/* Object.create
*/


// const person = Object.create({}, {
//     name: {
//         value: 'Ihar',
//         enumerable: true,
//         writable: true,
//         configurable: true,
//     },
//     lastName: {
//         value: 'Maslakou',
//         enumerable: true,
//         writable: true,
//         configurable: true,
//     },
//     fullName: {
//         get() {
//             return this.name + ' ' + this.lastName;
//         },
//         set(value) {
//             this.name = value;
//             this.lastName = value
//         }
//     }
// })

// person.fullName = 'Victor';

// for (let key in person) {
//     console.log('Key: ', key);
// }

// const asdf = {}


// const animal = {
//     eat: function() {
//         console.log('Eat')
//     }
// }

// const cat = {
//     tail: true,
// }

// const rabbit = {
//     jump: function() {
//         console.log('jump')
//     },
// }

// cat.__proto__ = animal;
// rabbit.__proto__ = animal;

// console.log(rabbit)

class Animal {
    constructor(options) {
        this.age = options.age;
    }

    sayHi() {
        console.log('Hi')
    }
}

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.tail = true;
        this.name = options.name;
    }
}

const catVasya = new Cat({
    age: 6, 
    name: 'Vasya'
});

const catBoris = new Cat({
    age: 5,
    name: 'Boris'
})



console.log(catVasya, catBoris);