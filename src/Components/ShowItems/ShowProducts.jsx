import Cart from "./Cart";


export default function ShowProducts({myArray , numCol }) {

	return (
		<div className="">
			<div className="grid grid-cols-12 gap-5 justify-items-center items-center gap-y-10">
				{myArray.map((item) => (
					<span
						key={item.id}
						className={` ${
							numCol
								? "col-span-6 md:col-span-4"
								: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
						} justify-items-center items-center justify-center`}
					>
						<Cart
							url={item.image}
							title={item.title}
							price={item.price}
							rate={item.rating.rate}
							priceOff={item.price}
							id={item.id}
						/>
					</span>
				))}
			</div>
		</div>
	);
}