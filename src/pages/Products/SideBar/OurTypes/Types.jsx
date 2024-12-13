import { FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Types({ products, setShowFilter }) {
    const navigate = useNavigate();

    function clickHandler(q) {
        navigate(`?q=${q}`);
    }

    let types = [];
    products.map((product) => {
        types.push(product.category.toUpperCase());
    });

    const mySetType = new Set(types);

    types = [...mySetType];

    return (
        <div className="flex flex-col w-full gap-2">
            {types.map((item, index) => (
                <button
                    onClick={(e) => {
                        clickHandler(
                            e.target.innerText.toLowerCase(),
                        );
                        setShowFilter &&
                            setShowFilter(false);
                    }}
                    className="flex justify-between items-center text-sm hover:text-slate-800 w-full hover:bg-slate-100 px-3 rounded-lg py-2 text-gray-400"
                    key={index}
                >
                    {item}
                    <FaAngleRight />
                </button>
            ))}
        </div>
    );
}
