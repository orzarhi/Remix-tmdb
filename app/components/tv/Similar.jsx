/* eslint-disable jsx-a11y/img-redundant-alt */
import { useNavigate } from "@remix-run/react";
// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export const Similar = ({ tvId }) => {
	console.log("🚀  tvId:", tvId);
	const navigate = useNavigate();

	SwiperCore.use([EffectCoverflow, Pagination]);

	// return (
	// 	<div>
	// 		<Swiper
	// 			effect={"coverflow"}
	// 			grabCursor={true}
	// 			centeredSlides={true}
	// 			slidesPerView={"auto"}
	// 			coverflowEffect={{
	// 				rotate: 50,
	// 				stretch: 0,
	// 				depth: 100,
	// 				modifier: 1,
	// 				slideShadows: false,
	// 			}}
	// 			pagination={true}
	// 			className="mySwiper"
	// 		>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-1.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-2.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-3.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-4.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-5.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-6.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-7.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-8.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 			<SwiperSlide>
	// 				<img
	// 					src="https://swiperjs.com/demos/images/nature-9.jpg"
	// 					alt=""
	// 				/>
	// 			</SwiperSlide>
	// 		</Swiper>
	// 	</div>
	// );

	return (
		<Swiper
			effect={"coverflow"}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={"auto"}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: false,
			}}
			pagination={true}
			className="mySwiper"
		>
			<ul>
				{tvId.results?.map((tv, i) => (
					<SwiperSlide key={i}>
						<li className="">
							<div
								key={tv.id}
								className="m-2 text-base shadow-lg cursor-pointer hover:shadow-2xl shadow-red-500/10 sm:w-full"
								onClick={() => navigate(`/tv/${tv.id}`)}
							>
								<>
									<span className="flex justify-center">
										{tv.name}
									</span>

									<img
										src={`https://image.tmdb.org/t/p/w500/${tv.backdrop_path}`}
										alt="image-tv"
										className="rounded-t-3xl sm:w-full"
									/>
									<span>
										Release date:{" "}
										{new Date(
											tv.first_air_date
										).toLocaleDateString()}
									</span>
								</>
							</div>
						</li>
					</SwiperSlide>
				))}
			</ul>
		</Swiper>
	);
};
