import { FC } from 'react';
import type { Displays, Link } from '../types';

type PropTypes = {
    title: string,
    links: Link[]
    changeDisplay: (display: Displays) => void;
}

const Header: FC<PropTypes> = ({ title, links, changeDisplay }) => {
    return ( 
        <header className='bg-neutral-900'>
            <div className="container flex justify-between mx-auto py-4">
                <div className="logo">
                    <button onClick={() => changeDisplay(null)} className='flex items-center gap-4'>
                        <img src="/TypeWars.svg" alt={title} height={32} className='h-16 mr-8'/>
                        <span className='text-xl text-orange-300 font-bold'>{title}</span>
                    </button>
                </div>
                <nav>
                    <ul className="flex items-center pt-4 gap-4">
                        {links.map((link: Link) => <li key={link.id}><button onClick={() => changeDisplay(link.display)} className={`nav-link ${link.className || ''}`}>{link.text}</button></li>)}
                    </ul>
                </nav>
            </div>
        </header>
     );
}

export default Header;