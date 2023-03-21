import { useLoaderData } from "@remix-run/react";
import { getTopRatedMovies } from "~/api/movies/movies";
import { Home } from "~/components/home/Home";
import { requireUserSession } from "~/services/cookiesService";

export default function Index() {
	const movies = useLoaderData();
	const TopFive = movies.results.slice(0, 10);

	return <Home movies={TopFive} />;
}

export const loader = async ({ request }) => {
	const userId = await requireUserSession(request);

	return getTopRatedMovies(userId);
};
