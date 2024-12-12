import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to={"/"}>
			<button className="text-3xl font-black uppercase">SHOP.CO</button>
		</Link>
	);
}
