import { BsCurrencyDollar } from "react-icons/bs";
import { LuGem } from "react-icons/lu";
import { MdFiberNew } from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Menu({ changeMenuState, showMenu }) {
	
	const menu = [
		{
			title: "Shop",
			link: "search",
			icon: <PiShoppingBag className="text-xl" />,
			id: 1,
		},
		{
			title: "On Sale",
			icon: <BsCurrencyDollar className="text-xl" />,
			id: 2,
		},
		{
			title: "New Arrivals",
			icon: <MdFiberNew className="text-xl" />,
			id: 3,
		},
		{
			title: "Brands",
			icon: <LuGem className="text-xl" />,
			id: 4,
		},
	];

	function handlerClick() {
		showMenu && changeMenuState();
	}

	return (
		<ul className="flex gap-4 max-lg:flex-col">
			{menu.map((item) => (
				<li key={item.id}>
					<Link to={item.link} onClick={handlerClick}>
						<div className="max-lg:w-full flex justify-start items-center gap-4 max-lg:p-2 max-lg:hover:bg-black max-lg:hover:text-white max-lg:rounded-xl transition-all duration-300">
							{/* Logo */}
							<span className="lg:hidden">{item.icon}</span>

							{/* title */}
							<button className="w-full text-start max-lg:rounded-xl">
								{item.title}
							</button>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
