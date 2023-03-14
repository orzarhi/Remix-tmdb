/* eslint-disable jsx-a11y/img-redundant-alt */
import { IconButton } from "@mui/material";
import { Form, useNavigate } from "@remix-run/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// eslint-disable-next-line no-duplicate-imports
import { useParams } from "@remix-run/react";

export const Popular = ({ tvShows }) => {
	const navigate = useNavigate();

	const { page } = useParams();

	const handlePrev = () => {
		if (Number(page) > 1) {
			navigate(`/popular-tv-shows/${Number(page) - 1}`);
		}
	};

	const handleNext = () => {
		navigate(`/popular-tv-shows/${Number(page) + 1}`);
	};

	return (
		<>
			<span className="flex justify-center mt-4 text-3xl text-white underline decoration-pink-800/80 decoration-wavy font-comic">
				Popular Tv Shows
			</span>
			<Form method="post" className="flex justify-center mt-3 font-comic">
				<input
					className="w-1/5 mt-5 text-white bg-transparent placeholder:text-center"
					placeholder="Search tv show"
					id="name"
					name="name"
					autoComplete="off"
				/>
			</Form>
			<div className="grid grid-cols-4 gap-4 text-white p-14 font-comic xl:grid xl:grid-cols-3 xl:w-full lg:grid lg:grid-cols-2 lg:w-full sm:grid sm:grid-cols-1 sm:w-full">
				{tvShows.results?.map(
					(tv) =>
						// If there is no image do not display
						tv.backdrop_path && (
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
						)
				)}
			</div>
			{tvShows.results.length > 0 && (
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
