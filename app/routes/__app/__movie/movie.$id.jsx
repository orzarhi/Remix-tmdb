import { useLoaderData } from "@remix-run/react";
import { getMovieById } from "~/api/movies/movies";
import { Details } from "~/components/movie/Details";
import { requireUserSession } from "~/services/cookiesService";

export default function Movie() {
	const movieId = useLoaderData();

	return (
		<div className="text-xl">
			<Details movieId={movieId} />
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return getMovieById(params.id, userId);
};
export const meta = () => {
	return {
		title: "Movie Details",
	};
};
