import { useEffect, useState } from "react";
import Show from "./Show/Show";
import Range from "./SideBar/Range/Range";
import SideBar from "./SideBar/SideBar";
import { getApi } from "../../js/api";

export default function Products() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const reqData = getApi.get("/products");

		reqData.then((res) => res.data).then((res) => setProducts(res));
	}, []);



	const numOfShow = 10;
	const [minShow, setMinShow] = useState(0);

	let myArr = products && products.slice(minShow, minShow + numOfShow);

	const maxNum = products && Math.ceil(products.length / numOfShow);


	return (
		<>
			{products && (
				<div className="max-w-310 container">
					<div className="w-full h-px bg-black/10 mb-2"></div>
					<div className="flex max-xmd:justify-center xmd:justify-start items-stretch gap-7 h-full">
						<div className="max-xmd:hidden min-w-64">
							<SideBar products={products} />
						</div>
						<div className="">
							<Show myArr={myArr} products={products} />
							<div className="my-10 bg-black/15 h-px w-full"></div>
							<Range maxNum={maxNum} setMinShow={setMinShow} numOfShow={numOfShow} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
