import { getInShopBasket } from '../../js/localstorage';
import Items from './Items';
import Products from '../Products/Products';
import { useState } from 'react';

export default function Basket({ products }) {
    const productsInStorage = getInShopBasket();
    const [rerender, setRerender] = useState(false);

    let ids, basketProducts, nums;
    if (productsInStorage && products) {
        ids = productsInStorage.map((i) => i.id);
        nums = productsInStorage.map((i) => i.num);

        basketProducts = products.filter((item) =>
            ids.includes(item.id),
        );
    }

    return (
        <>
            {Products && (
                <div className="max-w-310 container">
                    <div className="text-3xl font-black my-5">
                        Basket
                    </div>
                    <div className="grid grid-cols-12 justify-center items-center gap-10">
                        <div className="border border-black/25 rounded-3xl p-4 divide-y-2 flex flex-col gap-7 col-span-7">
                            {basketProducts &&
                                basketProducts.map((p) => (
                                    <Items
                                        key={p.id}
                                        id={p.id}
                                        price={p.price}
                                        image={p.image}
                                        rate={p.rating.rate}
                                        title={p.title}
                                        setRerender={
                                            setRerender
                                        }
                                        number={
                                            nums[
                                                ids.indexOf(
                                                    p.id,
                                                )
                                            ]
                                        }
                                    />
                                ))}
                            {!basketProducts && (
                                <p>not order</p>
                            )}
                        </div>
                        <div className="bg-blue-300"></div>
                    </div>
                </div>
            )}
        </>
    );
}
