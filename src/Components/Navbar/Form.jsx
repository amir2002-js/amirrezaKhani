import { PiMagnifyingGlass } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Form() {
	const navigate = useNavigate();

	function searchHandler(q) {
		navigate(`search?q=${q}`);
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				searchHandler(e.target[1].value.toLowerCase());

				e.target[1].value = ""
			}}
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
