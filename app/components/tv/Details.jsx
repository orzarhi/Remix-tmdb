/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { convertBoolean } from "~/utils/convertBoolean";
import { Similar } from "./Similar";

export const Details = ({ tvShow }) => {
	return (
		<div className="text-lg font-comic sm:text-base">
			<span className="flex justify-center  mt-4 text-3xl text-white underline decoration-pink-800/80 decoration-wavy sm:text-2xl sm:mt-5">
				{tvShow.name}
			</span>
			<div className="flex text-white p-14 lg:flex lg:flex-col  lg:text-xl lg:w-screen sm:w-screen">
				<img
					src={`https://image.tmdb.org/t/p/w500/${tvShow.backdrop_path}`}
					alt="image-movie"
					className="w-2/6 rounded-t-3xl xl:w-2/5 lg:w-10/12 sm:w-screen"
				/>

				<div className="flex flex-col justify-start gap-5 ml-8 lg:gap-1 sm:ml-0 sm:text-base">
					<span className="text-pink-800/80 ">
						Release date:
						<span className="ml-2 text-white">
							{new Date(
								tvShow.first_air_date
							).toLocaleDateString()}
						</span>
					</span>
					<span className="text-pink-800/80 ">
						Genres:
						{tvShow.genres.map((genre) => (
							<span className="ml-2 text-white" key={genre?.id}>
								{genre?.name}
							</span>
						))}
					</span>
					<span className="text-pink-800/80 ">
						For Adult:
						<span className="ml-2 text-white">
							{convertBoolean(tvShow.adult)}
						</span>
					</span>
					<span className="text-pink-800/80 ">
						Languages:
						{tvShow.spoken_languages.map((languages) => (
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
							{tvShow.vote_average.toFixed(1)}/10
						</span>
					</span>
				</div>
			</div>

			<div className="flex justify-start relative bottom-12 w-2/5 p-4 text-lg ml-10 sm:text-base sm:table-cell sm:p-6">
				<span className="text-white">{tvShow.overview}</span>
			</div>
			{tvShow.homepage && (
				<div className="flex justify-start relative bottom-12 w-2/5 p-4 text-lg ml-10 sm:text-base sm:ml-2">
					<span className="text-pink-800/80">
						Home page:
						<a
							href={tvShow.homepage}
							target="_blank"
							className="text-white ml-2"
						>
							{tvShow.homepage}
						</a>
					</span>
				</div>
			)}
			{/* <Similar tvId={tvShow.id} /> */}
		</div>
	);
};
