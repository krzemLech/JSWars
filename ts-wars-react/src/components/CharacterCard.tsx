import { FC } from 'react';

type PropTypes = {
    name: string;
    planet: "Coursant" | "Tatooine" | "Alderaan" | "Naboo" | "Hoth" | "Dagobah" | "Bespin" | "Endor" | "Coruscant" | "Kamino";
    role: "jedi" | "smuggler" | "princess" | "storm trooper"
    isMarried: boolean;
    age: number;
    hobbies: string[];
}

const CharacterCard: FC<PropTypes> = ({ name, planet, role, isMarried, age, hobbies }) => {
    return (
        <div className="character-card min-w-[400px] bg-neutral-700 p-6 rounded-xl">
            <h1>Name: {name}</h1>
            <p>Planet: {planet}</p>
            <p>Role: {role}</p>
            <p>Married: {isMarried ? 'Yes' : 'No'}</p>
            <p>Age: {age}</p>
            <p>Hobbies: {hobbies.join(', ')}</p>
        </div>
    );
}

export default CharacterCard;