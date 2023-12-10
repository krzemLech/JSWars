const han = {
    name: 'Han',
    age: 30,
    email: "han@solo.com",
    address: {
        planet: 'Endor',
        street: 'Rue de Rebel',
        number: 1,
    },
    role: 'smuggler',
    hobbies: ['flying', 'drinking'],
    isMarried: false,
} as const

const luke = {
    name: 'Luke',
    age: 22,
    email: "luke@sky.walker",
    address: {
        planet: 'Tatooine',
        street: 'Rue de Rebel',
        number: 1,
    },
    role: 'jedi',
    hobbies: ['flying', 'force', 'athletics'],
    isMarried: false,
} as const

const leia = {
    name: 'Leia',
    age: 22,
    email: "leia@sky.walk",
    address: {
        planet: 'Alderaan',
        street: 'Princess Avenue',
        number: 1,
    },
    role: 'princess',
    hobbies: ['flying', 'force', 'politics'],
    isMarried: false,
} as const

export const characterList = [han, luke, leia];