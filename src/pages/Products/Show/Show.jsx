// import ShowProducts from "../../../Components/ShowItems/ShowProducts";

import { GiSettingsKnobs } from "react-icons/gi";
import Cart from "../../../Components/ShowItems/Cart";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

export default function Show({ myArr , products }) {
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
				<SideBar products={products}/>
			</div>
			<div className=" grid grid-cols-1 msm:grid-cols-2 md:grid-cols-3">
				{myArr.map((item) => (
					<span
						className="border border-black/5 hover:shadow-[0_0_10px__rgb(0,0,0,0.1)] flex items-stretch "
						key={item.id}
					>
						<Cart
							url={item.image}
							title={item.title}
							price={item.price}
							rate={item.rating.rate}
							priceOff={item.price}
							id={item.id}
						/>
					</span>
				))}
			</div>
		</div>
	);
}
