import React from 'react'
import { Link } from 'react-router-dom'

type ReklamaProProps = {
    imgSrc: string,
    title: string,
    text: string,
    url: string,
    buttonText: string
    className?: string
}

function ReklamaPro(props: ReklamaProProps) {
    return (
        <div className={'flex flex-col ' + props.className}>
            <div className='bg-brand-shades-400 text-white rounded-t-lg w-full mt-[74px] place-content-end justify-between'>
                <img className="object-cover w-full h-full rounded-t-lg" src={props.imgSrc}></img>
            </div>
            <div className='bg-neutral-700 px-[16px] py-[24px] w-full rounded-b-lg'>
                <p className='text-white font-bold font-space-grotesk text-xl'>{props.title}</p>
                <p className='text-neutral-300 font-normal font-inter text-sm'>{props.text}</p>
                <Link to={props.url}>
                    <div className='bg-white text-neutral-700 border-[#D0D5DD] rounded-lg px-10 py-1 font-semibold mt-[24px] text-center text-sm'>{props.buttonText}</div>
                </Link>
            </div>
        </div>
    )
}

export default ReklamaPro
