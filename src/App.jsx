import { useEffect, useState } from "react";
import { getApi } from "./js/api";

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const reqData = getApi.get("/products");
		reqData.then((res) => res.data).then((res) => setData(res));
	}, []);

	console.log(data);

	return (
		<>
			{data ? (
				<div className="flex gap-11 flex-wrap">
					{data.map((item) => (
						<div key={item.id}>
							<img src={item.image} width="80px" alt="" />
						</div>
					))}
				</div>
			) : (
				<span>jdsds</span>
			)}
		</>
	);
}

export default App;
