import { useEffect, useState } from "react";
import Brands from "./Brands/Brands";
import Header from "./Header/Header";
import { getApi } from "../../js/api";
import ShowProducts from "../../Components/ShowItems/ShowProducts";

export default function Landing() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const reqData = getApi.get("/products");
		reqData.then((res) => {
            res.data
        })
        .then((res) => setData(res));
	}, []);

    console.log(data)

	const cate1 = data && data.filter(item => item.category == "men's clothing");

	return (
		<div>
			<Header />
			<Brands />
            <ShowProducts myArray={cate1} />
		</div>
	);
}
