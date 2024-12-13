import { useEffect, useState } from 'react';
import IncDecBtn from './IncDecBtn';
import {
    BsChevronLeft,
    BsChevronRight,
} from 'react-icons/bs';

export default function Range({
    maxNum,
    setMinShow,
    numOfShow,
}) {
    const [chosen, setChosen] = useState(1);

    function changeChosen(num) {
        num > 0 && num <= maxNum && setChosen(num);
    }

    let valOfBtn =
        maxNum >= 2
            ? [
                  { val: 1, id: 1 },
                  { val: 2, id: 2 },
              ]
            : [{ val: 1, id: 1 }];

    chosen - 1 > 3 && valOfBtn.push({ val: '...', id: -1 });

    for (let i = -1; i < 2; i++) {
        chosen + i > 2 &&
            chosen + i < maxNum &&
            chosen != 1 &&
            // (chosen == 2 && maxNum < 2)
            valOfBtn.push({
                val: chosen + i,
                id: chosen + i,
            });

        chosen + i > 2 &&
            chosen + i < maxNum &&
            chosen != 1 &&
            chosen != 2 &&
            console.log({
                val: chosen + i,
                id: chosen + i,
            });
    }

    chosen + 1 < maxNum - 1 &&
        valOfBtn.push({ val: '...', id: -2 });

    const mySet = new Set(valOfBtn);

    valOfBtn = [...mySet];

    useEffect(() => {
        setMinShow((chosen - 1) * numOfShow);
        window.scrollTo(0, 0);
    }, [chosen]);

    return (
        <div className=" mx-auto flex justify-center items-center gap-5 max-sm:gap-2">
            <IncDecBtn
                action="-"
                setChosen={changeChosen}
                chosen={chosen}
            >
                <BsChevronLeft />
            </IncDecBtn>

            {valOfBtn.map((i) => (
                <button
                    onClick={() => {
                        changeChosen(i.id);
                    }}
                    key={i.id}
                    id={i.id}
                    className={`p-2 px-3 ${
                        i.val == chosen
                            ? 'bg-black text-white'
                            : 'bg-gray-200'
                    } hover:bg-black hover:text-white transition-all duration-300  rounded-lg max-sm:text-xs`}
                >
                    {i.val}
                </button>
            ))}

            <IncDecBtn
                action="+"
                setChosen={changeChosen}
                chosen={chosen}
            >
                <BsChevronRight />
            </IncDecBtn>
        </div>
    );
}
