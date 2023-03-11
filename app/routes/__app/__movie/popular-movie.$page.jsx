import { useLoaderData } from "@remix-run/react";
import { getPopularMovies } from "~/api/movies/movies";
import { Popular } from "~/components/movie/Popular";
import { requireUserSession } from "~/services/cookiesService";

export default function PopularMovie() {
	const movies = useLoaderData();

	return (
		<div className="text-xl">
			<Popular movies={movies} />
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return getPopularMovies(params.page, userId);
};

export const meta = () => {
	return {
		title: "Popular Movies",
	};
};
