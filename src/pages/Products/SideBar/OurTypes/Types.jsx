import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { getApi } from '../../../../js/api';

export default function Types({ setShowFilter }) {
    const navigate = useNavigate();
    const [types, setType] = useState(null);

    useEffect(() => {
        const reqData = getApi.get('/products/categories');
        reqData
            .then((res) => res.data)
            .then((res) => setType(res));
    }, []);

    function clickHandler(q) {
        navigate(`?q=${q}`);
    }

    const upperCaseType =
        types &&
        types.map((product) => {
            return product.toUpperCase();
        });

    return (
        <div className="flex flex-col w-full gap-2">
            {upperCaseType &&
                upperCaseType.map((item, index) => (
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
