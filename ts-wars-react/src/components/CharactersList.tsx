import { FC } from "react";

import { characterList } from '../data/characters.ts'
import CharacterCard from "./CharacterCard.tsx";

const CharacterList: FC = () => {
    return ( 
        <section className="flex flex-col gap-4 items-start">
            <h1 className="text-2xl mb-4">Character List</h1>
            {characterList.map((character) => <CharacterCard name={character.name} age={character.age} planet={character.address.planet} role={character.role} hobbies={character.hobbies}/>)}
        </section>
     );
}

export default CharacterList ;