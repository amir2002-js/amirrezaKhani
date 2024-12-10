export default function Info() {
    const information = [
        {num: 200, title:"International Brands" , id: 1},
        {num: 2000, title:"High-Quality Products" , id: 2},
        {num: 30000, title:"Happy Customers" , id: 3},
    ]
	return (
		<div className="h-full flex flex-col lg:h-[663px] justify-evenly max-lg:justify-start z-30 max-lg:gap-8 max-lg:justify-items-center max-lg:items-center max-lg:pt-5 backdrop-blur-md">
			<div className="flex flex-col items-start gap-5">
				<h2 className="font-black text-[50px] max-lg:hidden">
					FIND CLOTHES
					<br />
					THAT MATCHES
					<br />
					YOUR STYLE
				</h2>
                <h2 className="lg:hidden text-center text-[30px] font-black">
					FIND CLOTHES
					THAT MATCHES
					YOUR STYLE
                </h2>
				<figcaption className="text-sm font-extralight max-lg:text-center max-lg:mx-auto">
					Browse through our diverse range of meticulously crafted
					garments, designed
					<br />
					to bring out your individuality and cater to your sense of
					style.
				</figcaption>
				<button className="text-white bg-black rounded-full py-3 px-12 font-semibold max-lg:mx-auto">
					shop now
				</button>
			</div>

            <div className="flex gap-3 w-full justify-evenly items-center">
                {information.map(item => (
                    <div className="flex flex-col items-center" key={item.id}>
                        <div className="text-3xl">{item.num}+</div>
                        <div className="font-extralight">{item.title}</div>
                    </div>
                ))}
            </div>
		</div>
	);
}
