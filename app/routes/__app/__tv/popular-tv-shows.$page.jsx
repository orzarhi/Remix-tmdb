import { useActionData, useLoaderData } from "@remix-run/react";
import { getPopularTvShows, searchTvShow } from "~/api/tv/tv";
import { Popular } from "~/components/tv/Popular";
import { requireUserSession } from "~/services/cookiesService";

export default function PopularTv() {
	const tvShows = useLoaderData();
	const searchTvShows = useActionData();

	return (
		<div className="text-xl">
			<Popular
				tvShows={
					searchTvShows?.results.length > 0 ? searchTvShows : tvShows
				}
			/>
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return getPopularTvShows(params.page, userId);
};

export const action = async ({ request }) => {
	const qureyData = await request.formData();
	const qurey = Object.fromEntries(qureyData);

	return await searchTvShow(qurey);
};

export const meta = () => {
	return {
		title: "Popular Tv",
	};
};
