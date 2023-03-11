import { useLoaderData } from "@remix-run/react";
import { getPopularTvShows } from "~/api/tv/tv";
import { Popular } from "~/components/tv/Popular";
import { requireUserSession } from "~/services/cookiesService";

export default function PopularTv() {
	const tvShows = useLoaderData();

	return (
		<div className="text-xl">
			<Popular tvShows={tvShows} />
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return getPopularTvShows(params.page, userId);
};

export const meta = () => {
	return {
		title: "Popular Tv",
	};
};
