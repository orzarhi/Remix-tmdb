import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTvShowById, getTvSimilar } from "~/api/tv/tv";
import { Details } from "~/components/tv/Details";
import { requireUserSession } from "~/services/cookiesService";

export default function TvShow() {
	const tvShow = useLoaderData();

	return (
		<div className="text-xl">
			<Details tvShow={tvShow} />
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return await getTvShowById(params.id, userId);
	// const data2 = await getTvSimilar(params.id, userId);

	// const data = { data1, data2 };

	// return data;
	// const similar = await getTvSimilar(params.id, userId);
	// console.log("🚀 similar:", similar);
};
export const meta = () => {
	return {
		title: "tv Show Details",
	};
};
