import { Link } from "react-router-dom";
import Rate from "./Rate";

export default function Cart({ url, title, price, rate, id}) {
	return (
		<Link to={`/search/${id}`} className="hover:cursor-pointer  m-3 max-w-[18.5rem] flex flex-col justify-center items-center">

			{/* image */}
			<span className="grow">
				<img src={url} className="w-[18.5rem] h-[100%] rounded-3xl shadow p-6" />
			</span>

			<div className="flex flex-col gap-2 items-start text-start mt-3">
				{/* title */}
				<p className="font-bold text-sm line-clamp-1 w-full h-4 ">
					{title}
				</p>

				{/* rate */}
				<Rate rate={rate} />

				{/* price */}
				<p className="font-light text-lg line-clamp-1">{price} $</p>
			</div>
		</Link>
	);
}
