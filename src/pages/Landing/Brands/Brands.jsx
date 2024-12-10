import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// SwiperCore.use([Autoplay]);

export default function Brands() {
	const urlImg = [
		"/img/brand0.png",
		"/img/brand1.png",
		"/img/brand2.png",
		"/img/brand3.png",
		"/img/brand4.png",
	];
	return (
		<div>
			<div className="bg-black p-5 flex justify-center items-center">
				<div className="flex justify-center container max-w-310 items-center overflow-hidden">
					<Swiper
						loop={true}
						centeredSlides={false}
						breakpoints={{
							320: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 30,
							},
						}}
					>
						{urlImg.map((url, i) => (
							<SwiperSlide
								className="w-auto text-center flex justify-center items-center"
								key={i}
							>
								<button>
									<img src={url} alt="" className="h-7 " />
								</button>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}
