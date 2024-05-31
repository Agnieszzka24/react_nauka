import React from 'react';

type AddWBProps = {
    icon: string;
    text: string;
    text2: string;
    plus: string;
    plusS: string;
    className?: string;
};

function AddWB(props: AddWBProps) {
    return (
        <div className={'flex flex-row ' + props.className}>
            <div className="flex flex-col shadow-xl border-2 p-6 m-8 w-full max-w-[400px] max-h-[200px] h-full rounded-xl border-neutral-200 hover:border-primary-900">
                <img className="size-12 mb-8" src={props.icon}></img>
                <p className="font-semibold font-inter size-3 text-neutral-500 leading-[18px] mb-1 text-xs">
                    {props.text}
                </p>
                <div className="flex flex-row items-end">
                    <p className="font-semibold font-inter size-5 leading-[30px] text-neutral-900 flex flex-row w-full text-[20px] ">
                        {props.text2}
                    </p>
                    <img
                        className="size-6 flex justify-end ml-[130px]"
                        src={props.plusS}
                    ></img>
                    {/*Nie wiem jak zrobić aby ten plusik po najechaniu się robił fioletowy (tak jak border) */}
                </div>
            </div>
        </div>
    );
}

export default AddWB;
