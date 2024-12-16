import { getInShopBasket } from '../../js/localstorage';
import Items from './Items';
import { useEffect, useState } from 'react';
import Order from './Order';
import NotFound from '../../Components/404/NotFound';
import Divider from '../../Components/Divider/Divider';

export default function Basket({ products }) {
    const productsInStorage = getInShopBasket();
    const [rerender, setRerender] = useState(false);
    
    const [nums, setNums] = useState(
        productsInStorage.map((i) => i.num),
    );

    let ids, basketProducts;
    if (productsInStorage && products) {
        ids = productsInStorage.map((i) => i.id);
        basketProducts = products.filter((item) =>
            ids.includes(item.id),
        );
    }

    useEffect(() => {
        setNums(productsInStorage.map((i) => i.num));
    }, []);

    return (
        <div className="max-w-310 container">
            <Divider />
            {productsInStorage.length > 0 ? (
                <>
                    {products && basketProducts && (
                        <div className="">
                            <div className="text-3xl font-black my-5">
                                Basket
                            </div>
                            <div className="grid grid-cols-12 max-sm:grid-cols-1 justify-center items-center gap-10 w-full">
                                <div className="border w-full border-black/15 shadow-lg rounded-3xl p-4 divide-y-2 flex flex-col gap-7 col-span-7 max-md:col-span-full">
                                    {basketProducts &&
                                        basketProducts.map(
                                            (p) => (
                                                <Items
                                                    productsInStorage={
                                                        productsInStorage
                                                    }
                                                    key={
                                                        p.id
                                                    }
                                                    id={
                                                        p.id
                                                    }
                                                    price={
                                                        p.price
                                                    }
                                                    image={
                                                        p.image
                                                    }
                                                    rate={
                                                        p
                                                            .rating
                                                            .rate
                                                    }
                                                    title={
                                                        p.title
                                                    }
                                                    number={
                                                        nums[
                                                            ids.indexOf(
                                                                p.id,
                                                            )
                                                        ]
                                                    }
                                                    setRerender={
                                                        setRerender
                                                    }
                                                    setNums={
                                                        setNums
                                                    }
                                                />
                                            ),
                                        )}
                                    {!basketProducts && (
                                        <p>not order</p>
                                    )}
                                </div>
                                <div className="p-4 border border-black/15 rounded-3xl max-md:col-span-full shadow-lg col-span-5">
                                    <Order
                                        products={
                                            basketProducts
                                        }
                                        nums={nums}
                                        ids={ids}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
}
