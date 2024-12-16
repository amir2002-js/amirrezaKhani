import Divider from '../../Components/Divider/Divider';

export default function Order({ nums, products, ids }) {
    let sum = 0

    return (
        <div>
            <h2 className="capitalize text-3xl font-semibold">
                order
            </h2>
            <Divider />
            <div className="flex flex-col gap-2">
                {products.map((i) => (
                    <div className="" key={i.id}>
                        <div className="text-sm text-black/30 flex justify-between items-center">
                            <p className=" w-1/2 flex">
                                <span className="line-clamp-1">
                                    {i.title}
                                </span>
                            </p>
                            <p>
                                {i.price}$ ×{' '}
                                <span>
                                    {
                                        nums[
                                            ids.indexOf(
                                                i.id,
                                            )
                                        ]
                                    }
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Divider />
            <div className="flex justify-between items-center text-black/70">
                <p className="text-sm font-semibold">
                    total
                </p>
                <p>{sum}$</p>
            </div>
        </div>
    );
}
