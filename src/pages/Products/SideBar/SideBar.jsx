import { GiSettingsKnobs } from "react-icons/gi";
import Types from "./OurTypes/Types";
import Colors from "./Colors/Colors";
import Divider from "../../../Components/Divider/Divider";

export default function SideBar({ products , setShowFilter }) {
	return (
		<div className="bg-white w-full xmd:w-64 max-h-screen max-xmd:h-full border xmd:sticky top-3 border-primary-gray rounded-2xl flex flex-col max-xmd:justify-between max-xmd:pb-20 justify-start items-center gap-4 shadow p-5">
			<header className="flex justify-between items-center w-full">
				<h2 className="font-semibold text-2xl">Filter</h2>
				<span>
					<GiSettingsKnobs />
				</span>
			</header>

			<Divider />
			<Types products={products} setShowFilter={setShowFilter} />
			<Divider />
			<Colors />
		</div>
	);
}
