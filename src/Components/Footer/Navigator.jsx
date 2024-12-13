export default function Navigator({ title, list }) {
    return (
        <div>
            <div className="">
                <h2 className="font-semibold mb-4">
                    {title}
                </h2>
                <ul className="flex flex-col gap-1">
                    {list.map((item, index) => (
                        <li
                            key={index}
                            className="text-gray-400 hover:text-black"
                        >
                            <button>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
