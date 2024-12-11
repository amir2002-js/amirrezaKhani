export default function DressStyle() {
	const myArr = [
		{ url: "/img/image1.png", isSpan2: false, title: "Casual", id: 1 },
		{ url: "/img/image3.png", isSpan2: true, title: "Formal", id: 2 },
		{ url: "/img/image2.png", isSpan2: true, title: "Party", id: 3 },
		{ url: "/img/image4.png", isSpan2: false, title: "Gym", id: 4 },
	];
	return (
		<div className="p-14 rounded-[40px] bg-primary-gray">
			<h2 className="font-extrabold mb-7 text-3xl text-center mx-auto">BROWSE BY DRESS STYLE</h2>
			<div className="grid grid-cols-3 gap-5">
				{myArr.map((item) => (
					<button
						className={`${
							item.isSpan2 ? "lg:col-span-2" : "lg:col-span-1"
						} col-span-3 shadow-xl shadow-black/15 relative ${
							item.id == 2 ? "bg-[#FCFCFC]" : "bg-white"
						}  rounded-xl h-60 overflow-hidden flex justify-end items-center group`}
						key={item.id}
					>
						<img
							src={item.url}
							alt=""
							className="h-full object-cover group-hover:scale-[1.15] group-hover:rotate-6 transition-all duration-300"
						/>
						<p className="absolute text-2xl font-bold top-0 left-0 m-6">
							{item.title}
						</p>
					</button>
				))}
			</div>
		</div>
	);
}
