import { useLoaderData } from "@remix-run/react";
import { getMovieById } from "~/api/movies/getPopularMovies";
import { MovieDetails } from "~/components/movie/MovieDetails";

export default function Movie() {
	const movieId = useLoaderData();

	return (
		<div className="text-xl">
			<MovieDetails movieId={movieId} />
		</div>
	);
}
export const loader = async ({ params }) => {
	return getMovieById(params.id);
};
export const meta = () => {
	return {
		title: "Movie Details",
	};
};
