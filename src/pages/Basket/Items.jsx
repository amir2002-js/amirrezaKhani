import { GiTrashCan } from 'react-icons/gi';
import Rate from '../../Components/ShowItems/Rate';
import BtnGroup from '../../Components/BtnGroup/BtnGroup';
import { useEffect, useState } from 'react';
import {
    removeInShopBasket,
    setInShopBasket,
} from '../../js/localstorage';

export default function Items({
    image,
    title,
    price,
    rate,
    number,
    id,
    setRerender,
}) {
    const [productNumber, setProductNumber] =
        useState(number);
    const [myShopBasket, setMyShopBasket] = useState(null);

    function addToShopBasket(newObj) {
        setMyShopBasket(newObj);
    }

    useEffect(() => {
        myShopBasket != null &&
            setInShopBasket(myShopBasket);
    }, [myShopBasket]);

    useEffect(() => {
        let newObj = {
            id: id,
            num: productNumber,
        };
        addToShopBasket(newObj);
    }, [productNumber]);

    return (
        <div className="flex justify-between items-center gap-7 p-7 h-32">
            <div className="flex justify-center items-center gap-5 h-24">
                <img
                    src={image}
                    alt=""
                    className="h-full"
                />
                <div className="">
                    {/* title */}
                    <p className="text-sm font-bold line-clamp-1">
                        {title}
                    </p>

                    {/* rate */}
                    <div className="scale-90 -translate-x-2">
                        <Rate rate={rate} />
                    </div>

                    {/* price */}
                    <p className="text-xs font-semibold">
                        {price} $
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-between gap-7 items-end">
                <button
                    onClick={() => {
                        removeInShopBasket(id);
                        setRerender((p) => !p);
                    }}
                    className=""
                >
                    <GiTrashCan className="text-2xl text-red-500" />
                </button>
                <div className="scale-75 translate-x-3">
                    <BtnGroup
                        productNumber={productNumber}
                        setProductNumber={setProductNumber}
                    />
                </div>
            </div>
        </div>
    );
}
