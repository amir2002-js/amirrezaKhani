import { useState } from 'react';
import BtnColor from './BtnColor';

export default function Colors() {
    const [isClick, setIsClick] = useState(0);
    const colors = [
        'bg-white',
        'bg-black',
        'bg-blue-400',
        'bg-green-400',
        'bg-red-400',
        'bg-yellow-400',
        'bg-purple-400',
        'bg-pink-400',
    ];
    return (
        <div>
            <h2 className="text-lg font-semibold mb-3">
                Colors
            </h2>
            <div className="flex justify-around items-center gap-2 flex-wrap">
                {colors.map((color, index) => (
                    <BtnColor
                        color={color}
                        key={index}
                        id={index}
                        isClick={isClick}
                        setIsClick={setIsClick}
                    />
                ))}
            </div>
        </div>
    );
}
