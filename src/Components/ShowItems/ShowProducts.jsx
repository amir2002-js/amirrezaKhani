import Cart from "./Cart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Divider from "../Divider/Divider";

export default function ShowProducts({ myArray }) {
	return (
		<div className="my-3 w-full">
			{myArray && (
				<div className="">
					<Swiper
						loop={true}
						autoplay={true}
						centeredSlides={false}
						breakpoints={{
							400: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							500: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
						}}
					>
						{myArray.map((item) => (
							<SwiperSlide
								className="w-auto text-center flex justify-center items-center"
								key={item.id}
							>
								<Cart
									url={item.image}
									title={item.title}
									price={item.price}
									rate={item.rating.rate}
									priceOff={item.price}
									id={item.id}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
			<div className="text-center">
				<button className="text-sm font-semibold border border-primary-gray px-12 py-2 rounded-full hover:scale-105 hover:border-black/55 transition-all duration-300 shadow ">
					view all
				</button>
			</div>
			<Divider />
		</div>
	);
}
