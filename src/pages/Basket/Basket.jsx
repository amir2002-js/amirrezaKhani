import { getInShopBasket, setInShopBasket } from '../../js/localstorage';
import Item from './Item';
import { useState } from 'react';
import Order from './Order';
import NotFound from '../../Components/404/NotFound';
import Divider from '../../Components/Divider/Divider';

export default function Basket({ products }) {
    const [productsInStorage, setProductsInStorage] = useState(() =>
        getInShopBasket() ? getInShopBasket() : [],
    );

    const nums = productsInStorage.map((i) => i.num);

    const increaseProductCount = (id) => {
        let products = getInShopBasket();
        const product = products.findIndex((item) => item.id == id);
        if (product !== -1) {
            products[product].num++;
            setInShopBasket(products[product]);
            setProductsInStorage(() => getInShopBasket());
        }
    };

    const decreaseProductCount = (id) => {
        let products = JSON.parse(localStorage.getItem('shopBasket'));
        const product = products.findIndex((item) => item.id == id);
        if (product !== -1 && products[product].num > 1) {
            products[product].num--;
            localStorage.setItem('shopBasket', JSON.stringify(products));
            setProductsInStorage(() => getInShopBasket());
        }
    };

    const removeProduct = (id) => {
        let products = JSON.parse(localStorage.getItem('shopBasket'));
        const product = products.find((item) => item.id != id);
        localStorage.setItem('shopBasket' , JSON.stringify(product == null ? []:[product]));
        setProductsInStorage(() => getInShopBasket());
    }

    let ids, basketProducts;
    if (productsInStorage && products) {
        ids = productsInStorage.map((i) => i.id);
        basketProducts = products.filter((item) => ids.includes(item.id));
    }

    return (
        <>
        <div className="max-w-310 container">
            <Divider />
            {productsInStorage != 0 ? (
                <>
                    {products && basketProducts && (
                        <div className="">
                            <div className="text-3xl font-black my-5">
                                Basket
                            </div>
                            <div className="grid grid-cols-12 max-sm:grid-cols-1 justify-center items-start gap-10 w-full">
                                <div className="border w-full border-black/15 shadow-lg rounded-3xl p-4 divide-y-2 flex flex-col gap-7 col-span-7 max-md:col-span-full">
                                    {basketProducts &&
                                        basketProducts.map((p) => (
                                            <Item
                                            productsInStorage={
                                                productsInStorage
                                            }
                                            key={p.id}
                                            item={p}
                                            increaseProductCount={
                                                increaseProductCount
                                            }
                                            decreaseProductCount={
                                                decreaseProductCount
                                            }
                                            removeProduct={
                                                removeProduct
                                            }
                                            />
                                        ))}
                                    {!basketProducts && <p>not order</p>}
                                </div>
                                <div className="p-6 border border-black/15 rounded-3xl max-md:col-span-full shadow-lg col-span-5 md:sticky top-5">
                                    <Order
                                        products={basketProducts}
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
    </>
    );
}
