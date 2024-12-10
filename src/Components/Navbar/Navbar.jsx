import {
	PiMagnifyingGlass,
	PiShoppingCartSimpleBold,
	PiUserCircleBold,
} from "react-icons/pi";
import Form from "./Form";
import ToggleMenu from "./ToggleMenu";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import Logo from "../Logo/Logo";

export default function Navbar() {
	// manage the close and open menu
	const [showMenu, setShowMenu] = useState(false);

	// manage remove side menu from the dom
	const [isVisible, setIsVisible] = useState(false);

	function changeMenuState() {
		if (isVisible) {
			setShowMenu((prev) => !prev);

			setTimeout(() => {
				setIsVisible((prev) => !prev);
			}, 300);
		} else {
			setIsVisible((prev) => !prev);

			setTimeout(() => {
				setShowMenu((prev) => !prev);
			}, 0);
		}
	}

	return (
		<>
			<div className="z-40 py-6">
				<section className="flex gap-10 max-sm:gap-5 items-center ">
					<div className="flex gap-3.5">
						<ToggleMenu changeMenuState={changeMenuState} />

						{/* logo */}
						<Logo />
					</div>

					{/* navbar links */}
					<div className="max-lg:hidden">
						<Menu />
					</div>

					{/* search part */}
					<div className="grow">
						<Form />
					</div>

					{/* icons */}
					<ul className="flex items-center gap-4">
						<li className="sm:hidden">
							<button>
								<PiMagnifyingGlass className="text-xl" />
							</button>
						</li>
						<li>
							<button>
								<PiShoppingCartSimpleBold className="text-xl" />
							</button>
						</li>
						<li>
							<button>
								<PiUserCircleBold className="text-xl" />
							</button>
						</li>
					</ul>
				</section>
			</div>

			{/* side menu */}
			<MobileMenu
				showMenu={showMenu}
				isVisible={isVisible}
				changeMenuState={changeMenuState}
			/>
		</>
	);
}
