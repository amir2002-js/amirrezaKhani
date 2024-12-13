import { useState } from 'react';
import {
    FaCheckCircle,
    FaHeart,
    FaRegHeart,
} from 'react-icons/fa';

export default function CommentCart({
    userName,
    rate,
    comment,
}) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="border border-gray-200 rounded-3xl p-4 flex flex-col gap-5 min-h-40 shadow-lg shadow-black/10 ">
            <div className="flex justify-start items-center gap-3">
                <p className="font-semibold">{userName}</p>
                <span>
                    <FaCheckCircle className="text-teal-600 text-xl" />
                </span>
            </div>

            <div className="">
                <p className="text-gray-500 text-sm overflow-hidden mt-3 line-clamp-1 ">
                    {comment}
                </p>
            </div>

            <div className="text-end w-full flex items-end justify-end">
                <div className="flex flex-col justify-center justify-items-center w-8 items-center">
                    <button
                        onClick={() =>
                            setIsLiked((p) => !p)
                        }
                    >
                        {isLiked ? (
                            <FaHeart className="text-red-600" />
                        ) : (
                            <FaRegHeart />
                        )}
                    </button>
                    <p className="text-xs text-gray-400">
                        {isLiked ? Number(rate) + 1 : rate}
                    </p>
                </div>
            </div>
        </div>
    );
}
