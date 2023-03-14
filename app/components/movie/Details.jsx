/* eslint-disable jsx-a11y/img-redundant-alt */
import { convertBoolean } from "~/utils/convertBoolean";

export const Details = ({ movieId }) => {
	return (
		<div className="text-lg font-comic sm:text-base">
			<span className="flex justify-center mt-4 text-3xl text-white underline decoration-pink-800/80 decoration-wavy sm:text-2xl sm:mt-5">
				{movieId.original_title}
			</span>
			<div className="flex mt-2 text-white p-14 lg:flex lg:flex-col lg:text-xl lg:w-screen sm:w-screen">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movieId.backdrop_path}`}
					alt="image-movie"
					className="w-2/6 rounded-t-3xl xl:w-2/5 lg:w-10/12 sm:w-screen"
				/>
				<div className="flex flex-col justify-start gap-5 ml-8 lg:gap-1 sm:ml-0 sm:text-base">
					<span className="text-pink-800/80 ">
						Release date:
						<span className="ml-2 text-white">
							{new Date(
								movieId.release_date
							).toLocaleDateString()}
						</span>
					</span>
					<span className="text-pink-800/80 ">
						Genres:
						{movieId.genres.map((genre) => (
							<span className="ml-2 text-white" key={genre?.id}>
								{genre?.name}
							</span>
						))}
					</span>
					<span className="text-pink-800/80 ">
						For Adult:
						<span className="ml-2 text-white">
							{convertBoolean(movieId.adult)}
						</span>
					</span>
					<span className="text-pink-800/80 ">
						Languages:
						{movieId.spoken_languages.map((languages) => (
							<span
								className="ml-2 text-white"
								key={languages?.name}
							>
								{languages?.name}
							</span>
						))}
					</span>
					<span className="text-pink-800/80 ">
						Rating:
						<span className="ml-2 text-white">
							{movieId.vote_average.toFixed(1)}/10
						</span>
					</span>
				</div>
			</div>

			<div className="relative flex justify-start w-2/5 p-4 ml-10 text-lg bottom-12 sm:text-base sm:table-cell sm:p-6">
				<span className="text-white">{movieId.overview}</span>
			</div>
		</div>
	);
};
