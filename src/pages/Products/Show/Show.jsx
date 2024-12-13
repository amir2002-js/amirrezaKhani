// import ShowProducts from "../../../Components/ShowItems/ShowProducts";

import { GiSettingsKnobs } from 'react-icons/gi';
import Cart from '../../../Components/ShowItems/Cart';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import MapArr from './MapArr';

export default function Show({ myArr, mainProducts }) {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <div>
            <div className="flex justify-center items-baseline max-xmd:justify-between gap-12 max-xmd:mx-10 mt-4">
                <h2 className="text-3xl font-extrabold mb-7 text-center xmd:mx-auto">
                    Casual
                </h2>
                <button
                    className="xmd:hidden"
                    onClick={() => setShowFilter((p) => !p)}
                >
                    <GiSettingsKnobs className="text-2xl" />
                </button>
            </div>

            {/* filter */}
            <div
                className={`fixed flex flex-col items-end bottom-0 left-0 w-full h-svh bg-slate-950/70 transition-all duration-500 ${
                    showFilter
                        ? 'transform translate-y-0'
                        : 'transform translate-y-full'
                }`}
            >
                <div
                    className="w-full grow"
                    onClick={() => setShowFilter(false)}
                ></div>
                <div className="h-4/5 bg-transparent w-full rounded-t-2xl shadow-[0_0_15px_rgba(255,255,255,0.4)] border-t-4 border-gray-700 ">
                    <SideBar
                        products={mainProducts}
                        setShowFilter={setShowFilter}
                    />
                </div>
            </div>

            <div className=" grid grid-cols-1 msm:grid-cols-2 md:grid-cols-3">
                <MapArr products={myArr} />
            </div>
        </div>
    );
}
