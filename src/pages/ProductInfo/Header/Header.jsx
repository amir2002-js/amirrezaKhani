import { useState } from "react";

export default function Header() {
	const [numOfClk, setNumOfClk] = useState(2);

    console.log(numOfClk)

	const myArr = ["FAQs", "Reviews", "Details"];
	return (
		<div className="flex justify-center items-center gap-5 *:grow my-5">
			{myArr.map((item, i) => (
				<div
					key={i}
					className="relative text-center *:w-full py-3"
					onClick={() => setNumOfClk(i+1)}
				>
					<button className="max-sm:text-xs">{item}</button>
					{numOfClk == i+1 && (
						<span className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-black animate-expanded"></span>
					)}
				</div>
			))}
		</div>
	);
}
