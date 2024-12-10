import { PiMagnifyingGlass } from "react-icons/pi";

export default function Form() {
	return (
		<form
			action=""
			className="max-w-full bg-primary-gray rounded-full py-2 px-3 flex gap-3 max-sm:hidden"
		>
			<button>
				<PiMagnifyingGlass className="text-xl" />
			</button>
			<input
				type="text"
				name=""
				id=""
				placeholder="Search For Products..."
				className="w-full bg-transparent outline-none"
			/>
		</form>
	);
}
