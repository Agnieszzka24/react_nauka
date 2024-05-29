import React from 'react';

type KontoProps = {
    img: string;
    name: string;
    mail: string;
    className?: string;
};

function Konto(props: KontoProps) {
    return (
        <div className={props.className}>
            <div className="bg-neutral-800 text-white  w-full mt-4  flex flex-row items-center rounded-b-lg p-4">
                <img
                    className="flex flex-col pr-4"
                    src={props.img}
                ></img>
                <div className="flex flex-col">
                    <p className="font-inter font-semibold text-sm">
                        {props.name}
                    </p>
                    <p className="font-inter font-medium text-neutral-400 text-xs">
                        {props.mail}
                    </p>
                </div>
                <button></button>
            </div>
        </div>
    );
}

export default Konto;
