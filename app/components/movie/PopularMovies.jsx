/* eslint-disable jsx-a11y/img-redundant-alt */
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { IconButton } from "@mui/material";
import { useNavigate } from "@remix-run/react";
// eslint-disable-next-line no-duplicate-imports
import { useParams } from "@remix-run/react";
import { useState } from "react";

export const PopularMovies = ({ movies }) => {
	const [inputSearch, setInputSearch] = useState("");

	const navigate = useNavigate();

	const { page } = useParams();

	const dataFilter = movies.results?.filter((movie) =>
		movie.title.toLowerCase().includes(inputSearch.toLowerCase())
	);

	const handlePrev = () => {
		if (Number(page) > 1) {
			navigate(`/popular-movie/${Number(page) - 1}`);
		}
	};

	const handleNext = () => {
		navigate(`/popular-movie/${Number(page) + 1}`);
	};

	return (
		<>
			<span className=" flex justify-center text-3xl text-white underline decoration-pink-800/80 decoration-wavy font-comic">
				Popular Movies
			</span>
			<div className="flex justify-center font-comic">
				<input
					className="w-48 mt-5 text-white bg-transparent placeholder:text-center"
					value={inputSearch}
					placeholder="Seacrh movie"
					onChange={({ target }) => setInputSearch(target?.value)}
				/>
			</div>
			{dataFilter.length > 0 ? (
				<div className="grid grid-cols-4 gap-4 text-white p-14 font-comic xl:grid xl:grid-cols-3 xl:w-full lg:grid lg:grid-cols-2 lg:w-full sm:grid sm:grid-cols-1 sm:w-full">
					{dataFilter?.map((movie) => (
						<div
							key={movie.id}
							className="m-2 text-base shadow-lg cursor-pointer hover:shadow-2xl shadow-red-500/10 sm:w-full"
							onClick={() => navigate(`/movie/${movie.id}`)}
						>
							<span className="flex justify-center">
								{movie.title}
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
						</div>
					))}
				</div>
			) : (
				<span className=" flex mt-8 justify-center text-xl font-comic text-pink-800/80">
					Not Results...
				</span>
			)}
			{dataFilter.length > 0 && (
				<div className="flex justify-center text-2xl text-white pb-7">
					<IconButton
						className="!text-white !text-xl"
						disabled={Number(page) <= 1 && true}
						onClick={handlePrev}
					>
						<AiOutlineArrowLeft />
					</IconButton>

					<span className="mx-4">Pages: {page}</span>

					<IconButton
						className="!text-white !text-xl"
						onClick={handleNext}
					>
						<AiOutlineArrowRight />
					</IconButton>
				</div>
			)}
		</>
	);
};
