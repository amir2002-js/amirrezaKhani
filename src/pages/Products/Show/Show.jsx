// import ShowProducts from "../../../Components/ShowItems/ShowProducts";

import { GiSettingsKnobs } from "react-icons/gi";
import Cart from "../../../Components/ShowItems/Cart";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import MapArr from "./MapArr";

export default function Show({ myArr , products ,mainProducts }) {
	const [showFilter , setShowFilter] = useState(false);
	return (
		<div>
			<div className="flex justify-center items-baseline max-xmd:justify-between gap-12 max-xmd:mx-10">
				<h2 className="text-3xl font-extrabold mb-7 text-center xmd:mx-auto">
					Casual
				</h2>
				<button className="xmd:hidden" onClick={() => setShowFilter(p => !p)}>
					<GiSettingsKnobs className="text-2xl" />
				</button>
			</div>
			<div className={`fixed bottom-0 left-0 w-full h-3/4 bg-slate-300/15 transition-all duration-300 ${showFilter? "transform translate-y-0": "transform translate-y-full"}`}>
				<SideBar products={mainProducts} setShowFilter={setShowFilter} />
			</div>
			<div className=" grid grid-cols-1 msm:grid-cols-2 md:grid-cols-3">
				<MapArr products={myArr} />
			</div>
		</div>
	);
}
