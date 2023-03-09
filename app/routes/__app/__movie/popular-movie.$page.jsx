import { useLoaderData } from "@remix-run/react";
import { getPopularMovies } from "~/api/movies/getPopularMovies";
import { PopularMovies } from "~/components/movie/PopularMovies";

export default function PopularMovie() {
	const movies = useLoaderData();

	return (
		<div className="text-xl">
			<PopularMovies movies={movies} />
		</div>
	);
}
export const loader = async ({ params }) => {
	return getPopularMovies(params.page);
};

export const meta = () => {
	return {
		title: "Popular Movies",
	};
};
