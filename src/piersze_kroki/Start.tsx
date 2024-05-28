import React from 'react';
import { Link } from 'react-router-dom';
import ReklamaPro from './ReklamaPro';
import Konto from './Konto';

function Start({ children }: { children: React.ReactNode }) {
    console.log(children);
    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="bg-neutral-900 w-[319px] h-[95vh] flex flex-col justify-between text-white rounded-lg m-3">
                <div className="p-6 w-full flex-1 flex">
                    <div className="w-full relative flex-1">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center">
                                <img
                                    className="size-14 mr-3 "
                                    src="Union.svg"
                                />
                                <h3 className="text-3xl font-space-grotesk font-bold">
                                    Startly
                                </h3>
                            </div>
                            <div className="border border-neutral-700 px-2 py-1 text-xs rounded-md text-neutral-300">
                                2.3.1
                            </div>
                        </div>
                        <Link to="/dashboard">
                            <button className="rounded-lg w-full text-center mt-8  hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                <img className="" src="dashboard.svg" />
                                Dashboard
                            </button>
                        </Link>
                        <hr className="gap-16 my-3 border-1 w-full ml-0 border-neutral-800" />
                        <div>
                            <p className="font-inter font-semibold text-neutral-400 text-xs">
                                Generuj
                            </p>
                        </div>
                        <Link to="/wpisblogowy">
                            {' '}
                            <button className="rounded-lg w-full text-center mt-4  hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                <img className="" src="wpis blogowy.svg" />
                                Wpis blogowy
                            </button>
                        </Link>
                        <Link to="/opisproduktu">
                            {' '}
                            <button className="rounded-lg w-full text-center   hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                <img className="" src="Bag.svg" />
                                Opis produktu
                            </button>
                        </Link>
                        <Link to="/pytanieiodpowiedz">
                            {' '}
                            <button className="rounded-lg w-full text-center   hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                <img
                                    className=""
                                    src="Pytanie i odpowiedź.svg"
                                />
                                Pytanie i odpowiedź
                            </button>
                        </Link>
                        <hr className="gap-16px my-6 border-1 w-full ml-0 border-neutral-800" />
                        <p className="font-inter font-semibold text-neutral-400 text-xs">
                            Twoje treści
                        </p>
                        <Link to="/twojeartykuly">
                            {' '}
                            <button className="rounded-lg w-full text-center mt-4 hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                <img className="" src="twoj wpis.svg" />
                                Twoje artykuły
                            </button>
                        </Link>
                        <Link to="/historia">
                            {' '}
                            <button className="rounded-lg w-full text-center hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                <img className="" src="historia.svg" />
                                Historia
                            </button>
                        </Link>
                        <ReklamaPro
                            buttonText="Zaktualizuj do wersji PRO"
                            imgSrc="shape.svg"
                            text="Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"
                            title="Więcej możliwości z kontem Pro"
                            url="/uptopro"
                            className="absolute -bottom-4 left-0 "
                        />
                    </div>
                </div>
                <Konto />
            </div>
            {children}
        </div>
    );
}

export default Start;
