/* eslint-disable jsx-a11y/img-redundant-alt */

import { convertBoolean } from "~/utils/convertBoolean";

export const MovieDetails = ({ movieId }) => {
	return (
		<div className="text-2xl font-comic sm:text-base">
			<span className="flex justify-center text-3xl text-white underline decoration-pink-800/80 decoration-wavy sm:text-2xl">
				{movieId.original_title}
			</span>
			<div className="flex mt-10 text-white p-14 xl:flex xl:flex-col xl:w-11/12 xl:text-2xl lg:text-xl lg:w-screen sm:w-screen">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movieId.backdrop_path}`}
					alt="image-movie"
					className="w-2/5 rounded-t-3xl xl:w-9/12 lg:w-10/12 sm:w-screen"
				/>
				<div className="flex flex-col justify-start gap-5 ml-8 lg:gap-1">
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

			<div className="flex justify-start w-2/5 p-4 text-lg ml-14">
				<span className="text-white ">{movieId.overview}</span>
			</div>
		</div>
	);
};
