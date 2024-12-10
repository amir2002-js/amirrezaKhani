import { FaStar, FaStarHalf } from "react-icons/fa";

export default function Rate({ rate }) {
    let arrStars = [];

	for (let i = 0; i < Math.floor(rate); i++) {
		arrStars.push(<FaStar className="text-yellow-400 text-sm" />);
	}

	if (rate - Math.floor(rate) != 0) {
		arrStars.push(<FaStarHalf className="text-yellow-400 text-sm" />);
	}
	return (
		<div className="flex justify-start items-center gap-2 text-sm font-semibold">
			<span className="flex">

			{arrStars.map((item, i) => (
				<span key={i}>{item}</span>
			))}
			</span>
			<p className="text-[12px] text-slate-400">{rate}/5</p>
		</div>
	);
}
