import React from 'react';

function Dashboard() {
    return (
        <div className="bg-back-100 flex flex-col py-3 px-5 w-full">
            <div>
                <div className="bg-white rounded-t-lg h-12 border border-b-neutral-200 flex flex-row ">
                    <p className="font-inter font-semibold text-sm leading-5 py-[14px] pl-4 ">
                        Artykuły:
                    </p>
                </div>
                <div className="bg-white shadow-sm rounded-b-lg w-full h-[49vh] mb-6 border">
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
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="bg-white shadow-sm rounded-lg w-full lg:w-2/3 h-[42.5vh] border">
                    <h2 className="text-xl font-bold p-4">Panel 2</h2>
                </div>
                <div className="bg-white shadow-sm rounded-lg w-full lg:w-1/3 h-[42.5vh] border">
                    <h2 className="text-xl font-bold p-4">Panel 3</h2>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
