import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CommentCart from "../../../Components/CommentCart/CommentCart";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Comments() {
	const comments = [
		{
			useName: "Arshia",
			comment:
				"lorem Ipsum is Lorem Ipsum islorem Ipsum is Lorem Ipsum islorem Ipsum is Lorem Ipsum islorem Ipsum is Lorem Ipsum islorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 1,
		},
		{
			useName: "Arsham",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 2,
		},
		{
			useName: "Babak",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 3,
		},
		{
			useName: "Baran",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 4,
		},
		{
			useName: "Kian",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 5,
		},
		{
			useName: "Mahsa",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 6,
		},
		{
			useName: "Nima",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 7,
		},
		{
			useName: "Mina89",
			comment: "lorem Ipsum is Lorem Ipsum is",
			rate: 4.5,
			id: 8,
		},
	];

	const slides = useRef(null);
	function handelRight() {
		if (slides.current && slides.current.swiper) {
			slides.current.swiper.slideNext();
		}
	}

	function handelLeft() {
		if (slides.current && slides.current.swiper) {
			slides.current.swiper.slidePrev();
		}
	}
	return (
		<div className="mt-14">
			{/* header of box comment */}
			<div className="flex justify-between items-center max-w-310 container">
				<h2 className="mb-7 text-3xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
				<div className="flex gap-6">
					<button
						className="p-1 rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow text-gray-300 hover:text-gray-900"
						onClick={() => handelLeft()}
					>
						<FaAngleLeft />
					</button>
					<button
						className="p-1 rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow text-gray-300 hover:text-gray-900"
						onClick={() => handelRight()}
					>
						<FaAngleRight />
					</button>
				</div>
			</div>
			<div className="relative w-full flex items-center justify-center">
				<div className="absolute top-0 bottom-0 w-4 sm:w-8 md:w-16 backdrop-blur-sm z-50 left-0"></div>
				<Swiper
					ref={slides}
					style={{
						// height: "180px",
						display: "flex",
						alignItems: "center",
						padding: "20px 50px",
					}}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
					loop={true}
					centeredSlides={true}
				>
					{comments.map((comment) => (
						<SwiperSlide key={comment.id}>
							<CommentCart
								data={comments}
								comment={comment.comment}
								userName={comment.useName}
								rate={comment.rate}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="absolute top-0 bottom-0 w-4 sm:w-8 md:w-16 backdrop-blur-sm z-50 right-0"></div>
			</div>
		</div>
	);
}
