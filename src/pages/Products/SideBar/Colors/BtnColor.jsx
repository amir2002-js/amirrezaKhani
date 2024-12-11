import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function BtnColor({ id, isClick, color, setIsClick }) {
	return (
		<button
			onClick={() => setIsClick(id)}
			className={`w-8 h-8 rounded-full ${color} border flex justify-center items-center`}
		>
			{id == isClick && (
				<FaCheck className="text-gray-500" stroke="10px" />
			)}
		</button>
	);
}
