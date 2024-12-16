import Divider from '../../Components/Divider/Divider';

export default function Order({ nums, products, ids }) {
    return (
        <div>
            <h2 className="capitalize text-3xl font-semibold">
                order
            </h2>
            <Divider />
            {products.map((i) => (
                <div className="" key={i.id}>
                    <div className="text-sm text-black/30 flex justify-between items-center">
                        <p className=" w-1/2 flex">
                            <span className='line-clamp-1'>{i.title}</span> 
                        </p>
                        <p>
                            {i.price}$ × <span>{nums[ids.indexOf(i.id)]}</span>
                        </p>
                    </div>
                    <Divider />
                    <div className="">
                        <p className='text-sm text-black font-semibold'>total</p>
                        {/* {products.map(i => )} */}
                    </div>
                </div>
            ))}
        </div>
    );
}
