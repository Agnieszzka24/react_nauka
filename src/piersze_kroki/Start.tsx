import React from 'react';
import Test1 from './Test1';
import { Link } from 'react-router-dom';

function Start({ children }: { children: React.ReactNode }) {
    console.log(children)
    return (
        <div>
            <div className="bg-[#101828] w-[319px] h-screen p-6 flex flex-col justify-between text-white rounded-lg m-1">
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <img className="size-14 mr-2 " src="Union.svg" />
                            <h3 className="text-3xl font-space-grotesk font-bold">Startly</h3>
                        </div>
                        <div className="border border-neutral-700 px-2 py-1 text-xs rounded-md text-neutral-300">
                            2.3.1
                        </div>
                    </div>
                    <Link to="/kontakt">Register<button className='rounded-lg w-full text-center mt-10 bg-neutral-900 p-3 gap-3 flex items-center text-[#98A2B3] font-inter font-semibold'>
                        <img className='' src="dashboard.svg" />Dashboard
                    </button>
                    </Link>
                    <hr className='gap-16px m-6 b-1px w-full ml-0 border-neutral-900' />
                    <div>
                        <p className='font-inter p-12px gap-10px font-semibold text-[#98A2B3] teŁxt-xs leading-[18px]'>Generuj</p>
                    </div>
                    <button className='rounded-lg w-full text-center mt-10 bg-[#101828] p-3 gap-3 flex items-center text-[#98A2B3] font-inter font-semibold'>
                        <img className='' src="wpis blogowy.svg" />Wpis blogowy
                    </button>
                    <button className='rounded-lg w-full text-center mt-10 bg-[#101828] p-3 gap-3 flex items-center text-[#98A2B3] font-inter font-semibold'>
                        <img className='' src="Bag.svg" />Opis produktu
                    </button>
                    <button className='rounded-lg w-full text-center mt-10 bg-[#101828] p-3 gap-3 flex items-center text-[#98A2B3] font-inter font-semibold'>
                        <img className='' src="Pytanie i odpowiedź.svg" />Pytanie i odpowiedź
                    </button>
                    <hr className='gap-16px m-6 b-1px w-full ml-0 border-[#1D2939]' />
                    <p className='font-inter p-12px gap-10px font-semibold text-[#98A2B3] text-xs leading-[18px]'>Twoje treści</p>
                    <button className='rounded-lg w-full text-center mt-10 bg-[#101828] p-3 gap-3 flex items-center text-[#98A2B3] font-inter font-semibold'>
                        <img className='' src="twoj wpis.svg" />Twoje artykuły
                    </button>
                    <button className='rounded-lg w-full text-center mt-10 bg-[#101828] p-3 gap-3 flex items-center text-[#98A2B3] font-inter font-semibold'>
                        <img className='' src="historia.svg" />Historia
                    </button>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Start;
