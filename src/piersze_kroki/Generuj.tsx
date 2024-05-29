import React from 'react';
import { Link } from 'react-router-dom';

type GenerujProps = {
    icon: string;
    name: string;
    link: string;
};

function Generuj({ icon, name, link }: GenerujProps) {
    return (
        <Link to={link}>
            <div className="text-base rounded-lg w-full text-center mt-4 hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                <img className="" src={icon} />
                {name}
            </div>
        </Link>
    );
}

export default Generuj;
