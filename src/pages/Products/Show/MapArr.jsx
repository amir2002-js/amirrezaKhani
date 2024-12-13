import Cart from '../../../Components/ShowItems/Cart';

export default function MapArr({ products }) {
    console.log(Boolean(products));
    return (
        <>
            {products.map((item) => (
                <span
                    className="border border-black/5 hover:shadow-[0_0_10px__rgb(0,0,0,0.1)] flex items-center justify-center *:w-full "
                    key={item.id}
                >
                    <Cart
                        url={item.image}
                        title={item.title}
                        price={item.price}
                        rate={item.rating.rate}
                        priceOff={item.price}
                        id={item.id}
                    />
                </span>
            ))}
            {products.length == 0 && (
                <div className="flex justify-center items-center col-span-full px-2 py-20">
                    <img src="./img/notFound.png" />
                </div>
            )}
        </>
    );
}
