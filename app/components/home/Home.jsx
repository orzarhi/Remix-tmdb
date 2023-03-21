/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "@remix-run/react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper.css";
// import "swiper/css/pagination";

export const Home = ({ movies }) => {
	const navigate = useNavigate();

	return (
		<>
			<span className="flex justify-center mb-8 text-3xl text-white underline decoration-pink-800/80 decoration-wavy font-comic">
				Top 5 rating
			</span>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				className="grid grid-cols-4 gap-4 text-lg text-white font-comic sm:text-base"
			>
				<div>
					{movies?.map((movie) => (
						<SwiperSlide
							key={movie.id}
							className="m-2 text-base shadow-lg cursor-pointer hover:shadow-2xl shadow-red-500/10 sm:w-full"
							onClick={() => navigate(`/movie/${movie.id}`)}
						>
							<>
								<span className="flex justify-center">
									{movie.original_title}
								</span>

								<img
									src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
									alt="image-movie"
									className="rounded-t-3xl sm:w-full"
								/>
								<span>
									Release date:{" "}
									{new Date(
										movie.release_date
									).toLocaleDateString()}
								</span>
							</>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	);
};
