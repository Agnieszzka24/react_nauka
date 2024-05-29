import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'flowbite-react';

type TwojeTresciProps = {
    icon: string;
    name: string;
    link: string;
    badge: number;
};

function TwojeTresci({ icon, name, link }: TwojeTresciProps) {
    return (
        <Link to={link}>
            <div className="text-base rounded-lg w-full text-center mt-4 hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                <img className="" src={icon} />
                {name} <Badge color="alert-info"></Badge>
            </div>
        </Link>
    );
}

export default TwojeTresci;
