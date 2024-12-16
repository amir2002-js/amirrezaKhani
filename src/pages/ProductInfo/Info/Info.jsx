import Divider from '../../../Components/Divider/Divider';
import Rate from '../../../Components/ShowItems/Rate';
import { useState } from 'react';
import { setInShopBasket } from '../../../js/localstorage';
import BtnGroup from '../../../Components/BtnGroup/BtnGroup';

export default function Info({ product }) {
    const [productNumber, setProductNumber] = useState(1);

    return (
        <>
            <div className="grow flex sm:min-w-96  flex-col 1.5xlg:justify-between gap-3 max-1.5xlg:w-full">
                {/* title */}
                <h2 className="text-2xl font-extrabold">
                    {product.title}
                </h2>

                {/* rate */}
                <Rate rate={product.rating.rate} />

                <p className="text-xs text-gray-400">
                    {product.description}
                </p>

                <Divider />

                <p className="text-xs text-black/40">
                    select color
                </p>

                <div className="flex gap-7">
                    <button className="size-9 rounded-full bg-red-900"></button>
                    <button className="size-9 rounded-full bg-blue-900"></button>
                    <button className="size-9 rounded-full bg-purple-900"></button>
                </div>

                <Divider />

                <p className="text-xs text-black/40">
                    chose size
                </p>

                <div className=" flex justify-evenly items-center gap-3 flex-wrap *:capitalize">
                    <button className="hover:bg-black bg-primary-gray px-5 py-2 rounded-3xl hover:text-white transition-all duration-500">
                        small
                    </button>
                    <button className="hover:bg-black bg-primary-gray px-5 py-2 rounded-3xl hover:text-white transition-all duration-500">
                        medium
                    </button>
                    <button className="hover:bg-black bg-primary-gray px-5 py-2 rounded-3xl hover:text-white transition-all duration-500">
                        larg
                    </button>
                    <button className="hover:bg-black bg-primary-gray px-5 py-2 rounded-3xl hover:text-white transition-all duration-500">
                        x-larg
                    </button>
                </div>

                <Divider />

                <div className="flex justify-center items-center gap-6 max-sm:flex-col w-full">
                    <BtnGroup
                        setProductNumber={setProductNumber}
                        productNumber={productNumber}
                    />
                    <button
                        onClick={() => {
                            setInShopBasket({
                                id: product.id,
                                num: productNumber,
                            });
                        }}
                        className="grow capitalize max-sm:order-1 w-full bg-black text-white h-10 rounded-full active:scale-105 transition-all duration-75"
                    >
                        {' '}
                        add to cart
                    </button>
                </div>
            </div>
        </>
    );
}
