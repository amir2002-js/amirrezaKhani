import { FaCheckCircle, FaStar, FaStarHalf } from "react-icons/fa";

export default function CommentCart({ userName, rate, comment }) {
	let stars = [];

	for (let i = 1; i < rate; i++) {
		stars.push(<FaStar className="text-yellow-400 text-sm" />);
	}
	if (rate - Math.floor(rate) > 0) {
		stars.push(<FaStarHalf className="text-yellow-400 text-sm" />);
	}

	return (
		<div className="border border-gray-200 rounded-3xl p-4 flex flex-col gap-2 h-40 shadow-lg shadow-black/10 ">
			<div className="flex justify-start items-center gap-3">
				<p className="font-semibold">{userName}</p>
				<span>
					<FaCheckCircle className="text-teal-600 text-xl" /> 
				</span>
			</div>
			<div className="">
				<span className="flex gap-0.5">
					{stars.map((item, i) => (
						<span key={i}>{item}</span>
					))}
				</span>

            </div>
			<div className="">
				<p className="text-gray-500 text-sm overflow-hidden mt-3 line-clamp-3 ">{comment}</p>
			</div>
		</div>
	);
}
