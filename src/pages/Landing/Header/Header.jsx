import Info from './Info';

export default function Header() {
    return (
        <div className=" bg-primary-gray max-lg:relative overflow-hidden h-[663px] max-sm:h-[800px] max-md:h-[910px] max-lg:h-[950px] ">
            <div className="grid grid-cols-12 max-w-310 container lg:relative">
                <div className="col-span-6 max-lg:col-span-12 h-full z-40">
                    <Info />
                </div>
                <img
                    src="/img/Banner.png"
                    alt=""
                    className="absolute bottom-0 right-0"
                />
            </div>
        </div>
    );
}
