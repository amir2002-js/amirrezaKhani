import { Link } from "react-router-dom";
import Rate from "./Rate";

export default function Cart({ url, title, price, rate, priceOff, id }) {
	return (
		<Link to={`/shop/xxx`} className="hover:cursor-pointer m-3">
			<span className="">
				<img src={url} className="size-[18.5rem] rounded-3xl shadow p-6" />
			</span>

			<div className="flex flex-col gap-2 items-start mt-3">
				{/* title */}
				<p className="font-bold text-sm line-clamp-1 w-full h-4 ">
					{title}
				</p>
				<p className="font-bold text-sm line-clamp-1 w-2/3 h-4 bg-black"></p>
				<p className="font-light text-lg line-clamp-1">{price} $</p>

				{/* rate */}
				<Rate rate={rate} />

				{/* price */}
				{/* <div className="flex gap-4">
					{priceOff > 0
						? `${price - (price * priceOff) / 100}`
						: `${price}`}
					$
					{priceOff > 0 && (
						<div className="flex items-center justify-center gap-2">
							<span className="line-through text-gray-400">
								{price}$
							</span>
							<span className="text-red-500 text-[10px] w-10 h-6 bg-primary-gray rounded-lg flex justify-center items-center">
								- {priceOff}%
							</span>
						</div>
					)}
						
				</div> */}
			</div>
		</Link>
	);
}
