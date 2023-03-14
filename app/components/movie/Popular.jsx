/* eslint-disable jsx-a11y/img-redundant-alt */
import { IconButton } from "@mui/material";
import { Form, useNavigate } from "@remix-run/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// eslint-disable-next-line no-duplicate-imports
import { useParams } from "@remix-run/react";

export const Popular = ({ movies }) => {
	const navigate = useNavigate();
	const { page } = useParams();

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
			<span className="flex justify-center mt-4 text-3xl text-white underline decoration-pink-800/80 decoration-wavy font-comic">
				Popular Movies
			</span>
			<Form method="post" className="flex justify-center mt-3 font-comic">
				<input
					className="w-1/5 mt-5 text-white bg-transparent placeholder:text-center"
					placeholder="Search movie"
					id="name"
					name="name"
					autoComplete="off"
				/>
			</Form>

			<div className="grid grid-cols-4 gap-4 text-white p-14 font-comic xl:grid xl:grid-cols-3 xl:w-full lg:grid lg:grid-cols-2 lg:w-full sm:grid sm:grid-cols-1 sm:w-full">
				{movies.results?.map((movie) => (
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
							{new Date(movie.release_date).toLocaleDateString()}
						</span>
					</div>
				))}
			</div>

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
		</>
	);
};
