import { useActionData, useLoaderData } from "@remix-run/react";
import { getPopularMovies, searchMovie } from "~/api/movies/movies";
import { Popular } from "~/components/movie/Popular";
import { requireUserSession } from "~/services/cookiesService";

export default function PopularMovie() {
	const movies = useLoaderData();
	const searchMovie = useActionData();

	return (
		<div className="text-xl">
			<Popular
				movies={searchMovie?.results.length > 0 ? searchMovie : movies}
			/>
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return getPopularMovies(params.page, userId);
};

export const action = async ({ request }) => {
	const qureyData = await request.formData();
	const qurey = Object.fromEntries(qureyData);

	return await searchMovie(qurey);
};

export const meta = () => {
	return {
		title: "Popular Movies",
	};
};
