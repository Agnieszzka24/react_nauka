import React from 'react';
import { Link } from 'react-router-dom';

type ReklamaProv2Props = {
    text: string;
    url: string;
    buttonText: string;
    className?: string;
};

function ReklamaProv2(props: ReklamaProv2Props) {
    return (
        <div className={'flex justify-end items-center w-full ' + props.className}>
            <p className='text-szary-900 font-inter font-normal text-sm mr-2'>
                {props.text}
            </p>
            <Link to={props.url}>
                <div className="bg-white text-szary-900 border border-szary-900 rounded-lg px-3 py-1 mr-4 my-[11px] font-semibold text-center text-sm leading-[18px]">
                    {props.buttonText}
                </div>
            </Link>
        </div>
    );
}

export default ReklamaProv2;
