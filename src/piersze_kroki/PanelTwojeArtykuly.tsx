import React from 'react';
import { Link } from 'react-router-dom';

type PanelTwojeArtykulyProps = {
    text: string;
    data: string;
    icon: string;
};
function PanelTwojeArtykuly(props: PanelTwojeArtykulyProps) {
    return (
        <div>
            <div className="">
                <div className="flex items-start">
                    <img
                        className="my-[28px] ml-[28px]"
                        src={props.icon}
                        alt="Twoj wpis"
                    />
                    <div className="flex flex-col">
                        <p className="text-base font-semibold font-inter leading-6 text-neutral-900 pl-3 mt-[28px]">
                            {props.text}
                        </p>
                        <p className="text-xs text-neutral-500 leading-[18px] font-medium font-inter ml-4">
                            {props.data}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PanelTwojeArtykuly;
