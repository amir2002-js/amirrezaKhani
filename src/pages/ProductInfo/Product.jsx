import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../js/api";
import { FaMinus, FaPlus } from "react-icons/fa";
import Rate from "../../Components/ShowItems/Rate";
import Divider from "../../Components/Divider/Divider";
import Info from "./Info/Info";

export default function Product() {
	const { id } = useParams();

	const [product, setProduct] = useState(null);

	useEffect(() => {
		const reqData = getApi(`/products/${id}`);
		reqData.then((res) => res.data).then((res) => setProduct(res));
	}, []);

	console.log(product);
	return (
		<>
			{product && (
				// <div className="grid grid-cols-2 max-w-310 container">
				// 	<img src={product.image} alt="" />
				// </div>
				<div className="container max-w-310">
					<div className="flex justify-between items-center gap-20 max-sm:gap-10 max-lg:flex-col *:mx-auto">
						<img src={product.image} alt="" className="w-[319px]" />

						{/* info */}
						<Info product={product} />
					</div>
				</div>
			)}
		</>
	);
}
