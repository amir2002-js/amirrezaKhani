import { useEffect, useState } from "react";
import Brands from "./Brands/Brands";
import Header from "./Header/Header";
import { getApi } from "../../js/api";
import ShowProducts from "../../Components/ShowItems/ShowProducts";

export default function Landing() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const reqData = getApi.get("/products");

		reqData.then((res) => res.data).then((res) => setProducts(res));
	}, []);

	console.log(products);

	const cate1 =
		products &&
		products.filter((item) => item.category == "men's clothing");

	const cate2 =
		products && products.filter((item) => item.category == "jewelery");

	return (
		<div>
			<Header />
			<Brands />

			<div className="max-w-310 container">
				<h2 className="font-extrabold text-3xl mt-10 text-center">
					men's clothing
				</h2>
				<ShowProducts myArray={cate1} />

				<h2 className="font-extrabold text-3xl mt-10 text-center">
					jewelery
				</h2>
				<ShowProducts myArray={cate2} />
			</div>
		</div>
	);
}
