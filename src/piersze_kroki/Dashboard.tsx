import React from 'react';
import { Link } from 'react-router-dom';
import AddWB from './AddWB';
import ReklamaProv2 from './ReklamaProv2';
import PanelTwojeArtykuly from './PanelTwojeArtykuly';

function Dashboard({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-back-100 flex flex-col py-3 px-5 w-full">
            <div>
                <div className="bg-white rounded-t-lg h-12 border border-b-neutral-200 flex flex-row">
                    <p className="font-inter font-semibold text-sm leading-5 py-[14px] pl-4 ">
                        Artykuły:
                    </p>
                    <ReklamaProv2
                        buttonText="Zaktualizuj do PRO"
                        text="Potrzebujesz więcej?"
                        url="/uptopro"
                        className="w-full "
                    />
                </div>
                <div className="bg-white shadow-sm rounded-b-lg w-full h-[49vh] mb-6 border relative">
                    <h2 className="text-[56px] leading-[72.8px] font-bold font-space-grotesk text-neutral-900 p-4 mx-8 mt-4">
                        Cześć, jestem&nbsp;
                        <span className="bg-gradient-to-r from-[#6315FF] via-[#FF1196] to-[#FFA236] inline-block text-transparent bg-clip-text">
                            Startly.
                        </span>
                        <br />
                        Generator treści.
                    </h2>
                    <p className="font-inter font-normal text-neutral-500 mx-14">
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="absolute bottom-0 left-0 flex flex-row py-8">
                        <AddWB
                            icon="KWpisBlogowy.svg"
                            text="Generuj"
                            text2="Wpis Blogowy"
                            plus="Plus.svg"
                            plusS="PlusS.svg"
                            className=""
                        />
                        <AddWB
                            icon="KBag.svg"
                            text="Generuj"
                            text2="Opis produktu"
                            plus="Plus.svg"
                            plusS="PlusS.svg"
                            className=""
                        />
                        <AddWB
                            icon="KPytaniaiODpowiedz.svg"
                            text="Generuj"
                            text2="Pytanie i odpowiedź"
                            plus="Plus.svg"
                            plusS="PlusS.svg"
                            className=""
                        />
                    </div>
                    <img
                        className="absolute top-0 right-0"
                        src="startly1.jpg"
                    ></img>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="bg-white shadow-sm rounded-lg w-full lg:w-2/3 h-[42.5vh] border">
                    <div className="bg-white rounded-t-lg h-20 border border-b-neutral-200 flex flex-row justify-between items-centers">
                        <p className="font-space-grotesk font-bold text-[28px] leading-[42px] py-4 pl-8 text-neutral-900">
                            Twoje artykuły
                        </p>
                        <Link to="/TwojeArtykuly">
                            <div className="flex justify-end items-center mr-8 my-[25px]">
                                <p className="font-semibold text-sm leading-5 font-inter  text-primary-900 flex justify-end items-center w-full">
                                    Zobacz wszystko&nbsp;
                                </p>
                                <img
                                    className="flex justify-end items-center size-3"
                                    src="Vector.svg"
                                ></img>
                            </div>
                        </Link>
                    </div>
                    <PanelTwojeArtykuly
                        text="Vorem ipsum dolor sit amet, consectetur adipiscing
                    elit."
                        data="Edytowano: 18.04.2024, 09:55:57"
                        icon="twoj wpis.svg"
                    />
                    <PanelTwojeArtykuly
                        text="Vorem ipsum dolor sit amet, consectetur adipiscing
                    elit."
                        data="Edytowano: 18.04.2024, 09:55:57"
                        icon="twoj wpis.svg"
                    />
                    <PanelTwojeArtykuly
                        text="Vorem ipsum dolor sit amet, consectetur adipiscing
                    elit."
                        data="Edytowano: 18.04.2024, 09:55:57"
                        icon="twoj wpis.svg"
                    />
                </div>
                <div className="bg-white shadow-sm rounded-lg w-full lg:w-1/3 h-[42.5vh] border">
                    <h2 className="text-xl font-bold ">
                        <div className="bg-white rounded-t-lg h-20 border border-b-neutral-200 flex flex-row justify-between items-centers">
                            <p className="font-space-grotesk font-bold text-[28px] leading-[42px] py-4 pl-8 text-neutral-900">
                                Historia
                            </p>
                            <Link to="/Historia">
                                <div className="flex justify-end items-center mr-8 my-[25px]">
                                    <p className="font-semibold text-sm leading-5 font-inter  text-primary-900 flex justify-end items-center w-full">
                                        Zobacz wszystko&nbsp;
                                    </p>
                                    <img
                                        className="flex justify-end items-center size-3"
                                        src="Vector.svg"
                                    ></img>
                                </div>
                            </Link>
                            
                        </div>
                    </h2>
                    <PanelTwojeArtykuly
                        text="Generowanie wpisu na bloga"
                        data="Utworzono: 18.04.2024, 10:10:10"
                        icon="historia.svg"
                    />
                    <PanelTwojeArtykuly
                        text="Generowanie wpisu na bloga"
                        data="Utworzono: 18.04.2024, 10:10:10"
                        icon="historia.svg"
                    />
                    <PanelTwojeArtykuly
                        text="Generowanie wpisu na bloga"
                        data="Utworzono: 18.04.2024, 10:10:10"
                        icon="historia.svg"
                    />
                </div>
                {children}
            </div>
        </div>
    );
}

export default Dashboard;
