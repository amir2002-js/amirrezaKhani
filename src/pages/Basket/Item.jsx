import { GiTrashCan } from 'react-icons/gi';
import Rate from '../../Components/ShowItems/Rate';
import { removeInShopBasket } from '../../js/localstorage';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function Item({
    item,
    increaseProductCount,
    decreaseProductCount,
}) {
    const {
        image,
        title,
        price,
        rating: { rate }, // [array|object] destructuring
        id,
    } = item;

    return (
        <div className="flex justify-between items-center gap-7 p-7 h-32 w-full">
            <div className="flex justify-center items-center gap-5 h-20 w-20">
                <img
                    src={image}
                    alt=""
                    className="ml-20 object-contain max-w-full max-h-full"
                />
                <div className="">
                    {/* title */}
                    <p className="text-sm font-bold line-clamp-1">{title}</p>

                    {/* rate */}
                    <div className="scale-90 -translate-x-2">
                        <Rate rate={rate} />
                    </div>

                    {/* price */}
                    <p className="text-xs font-semibold">{price} $</p>
                </div>
            </div>

            <div className="flex flex-col justify-between gap-7 items-end">
                <button
                    onClick={() => {
                        removeInShopBasket(id);
                    }}
                    className=""
                >
                    <GiTrashCan className="text-2xl text-red-500" />
                </button>
                <div className="scale-75 translate-x-3">
                    {/* groups of btn */}
                    <div className="bg-primary-gray flex justify-center max-sm:order-2 items-center *:w-10 *:h-10 *:flex *:justify-center *:items-center rounded-full overflow-hidden">
                        <button
                            className="hover:bg-black hover:text-white"
                            onClick={() => increaseProductCount(id)}
                        >
                            <FaPlus />
                        </button>
                        <button>
                            {
                                JSON.parse(
                                    localStorage.getItem('shopBasket'),
                                ).find((item) => item.id == id).num
                            }
                        </button>
                        <button
                            className="hover:bg-black hover:text-white"
                            onClick={() => decreaseProductCount(id)}
                        >
                            <FaMinus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
