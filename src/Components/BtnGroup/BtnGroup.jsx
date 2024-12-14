import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

export default function BtnGroup({
    productNumber,
    setProductNumber,
}) {
    return (
        <div className="bg-primary-gray flex justify-center max-sm:order-2 items-center *:w-10 *:h-10 *:flex *:justify-center *:items-center rounded-full overflow-hidden">
            <button
                onClick={() => setProductNumber((p) => ++p)}
                className="hover:bg-black hover:text-white"
            >
                <FaPlus />
            </button>
            <button>{productNumber}</button>
            <button
                onClick={() =>
                    setProductNumber((p) =>
                        p > 1 ? --p : p,
                    )
                }
                className="hover:bg-black hover:text-white"
            >
                <FaMinus />
            </button>
        </div>
    );
}
