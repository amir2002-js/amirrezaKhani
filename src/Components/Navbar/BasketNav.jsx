import { useEffect, useState } from 'react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function BasketNav({ isShop }) {
    const [isShopState, setIsShopState] = useState(isShop);

    return (
        <button
            className={`hover:bg-primary-gray p-2 rounded-[50%] relative ${isShopState && isShopState.length > 0 && 'after:size-2 after:absolute after:bg-red-700 after:ring-2 after:ring-red-200 after:rounded-full after:top-0 after:left-0'}`}
        >
            <Link to={'/basket'}>
                <PiShoppingCartSimpleBold className="text-xl" />
            </Link>
        </button>
    );
}
