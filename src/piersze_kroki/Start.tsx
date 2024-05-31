import React from 'react';
import { Link } from 'react-router-dom';
import ReklamaPro from './ReklamaPro';
import Konto from './Konto';
import Dashboard from './Dashboard';
import Generuj from './Generuj';
import TwojeTresci from './TwojeTresci';

function Start({ children }: { children: React.ReactNode }) {
    console.log(children);
    return (
        <div className='bg-back-100 relative'>
            <div className="flex flex-col lg:flex-row ">
                <div className="bg-neutral-900 max-w-[319px] w-full h-[98vh] flex flex-col justify-between text-white rounded-lg m-3 ">
                    <div className="p-6 w-full flex-1 flex ">
                        <div className="w-full relative flex-1 ">
                            <div className="flex items-center justify-between mb-8 ">
                                <div className="flex items-center">
                                    <img
                                        className="size-14 mr-3 "
                                        src="Union.svg"
                                    />
                                    <h3 className="text-3xl font-space-grotesk font-bold ">
                                        Startly
                                    </h3>
                                </div>
                                <div className="border border-neutral-700 px-2 py-1 text-xs rounded-md text-neutral-300">
                                    2.3.1
                                </div>
                            </div>
                            <Link to="/dashboard">
                                <div className="text-base rounded-lg w-full text-center mt-8  hover:bg-neutral-800 hover:text-white text-neutral-400 p-3 gap-3 flex items-center text-neutral/400 font-inter font-semibold">
                                    <img className="" src="dashboard.svg" />
                                    Dashboard
                                </div>
                            </Link>
                            <hr className="text-base gap-16 my-3 border-1 w-full ml-0 border-neutral-800" />
                            <div>
                                <p className="font-inter font-semibold text-neutral-400 text-xs">
                                    Generuj
                                </p>
                            </div>
                            <div>
                                <Generuj
                                    icon="wpis blogowy.svg"
                                    name="Wpis blogowy"
                                    link="/wpisblogowy"
                                />
                                <Generuj
                                    icon="Bag.svg"
                                    name="Opis produktu"
                                    link="/opisproduktu"
                                />
                                <Generuj
                                    icon="Pytanie i odpowiedź.svg"
                                    name="Pytanie i odpowiedź"
                                    link="/pytanieiodpowiedz"
                                />
                            </div>
                            <hr className="gap-16px my-6 border-1 w-full ml-0 border-neutral-800" />
                            <p className="font-inter font-semibold text-neutral-400 text-xs">
                                Twoje treści
                            </p>
                            <div>
                                <TwojeTresci
                                    icon="twoj wpis.svg"
                                    name="Twoje artykuły"
                                    link="/TwojeArtykuly"
                                    badge={2}
                                />
                                <TwojeTresci
                                    icon="historia.svg"
                                    name="Historia"
                                    link="/Historia"
                                    badge={12}
                                />
                            </div>
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
                    <Konto
                        img="Frame.svg"
                        name="Adam Kowalski"
                        mail="adamkowalski@gamil.com"
                        className=""
                    />
                </div>
                {children}
            </div>
        </div>
    );
}

export default Start;
