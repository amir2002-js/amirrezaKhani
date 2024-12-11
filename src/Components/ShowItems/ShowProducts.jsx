import Cart from "./Cart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Divider from "../Divider/Divider";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function ShowProducts({ myArray }) {
	return (
		<div className="my-3 w-full ">
			{myArray && (
				<div className="">
					<Swiper
						onSwiper={swiper => {
							swiper.pagination.bullets.forEach(bullet => bullet.style.backgroundColor = "black")
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Pagination]}
						className="mySwiper"
						loop={true} 
						autoplay={true}
						centeredSlides={false}
						breakpoints={{
							400: {
								slidesPerView: 1,
								spaceBetween: 0,
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
								className="mb-12 mx-auto"
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
				<button className="text-sm mt-4 font-semibold border border-primary-gray px-12 py-2 rounded-full hover:scale-105 hover:border-black/55 transition-all duration-300 shadow ">
					view all
				</button>
			</div>
			<Divider />
		</div>
	);
}
