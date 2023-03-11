import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTvShowById, getTvSimilar } from "~/api/tv/tv";
import { Details } from "~/components/tv/Details";
import { requireUserSession } from "~/services/cookiesService";

export default function TvShow() {
	const tvShow = useLoaderData();
	console.log("🚀 tvShow:", tvShow);

	return (
		<div className="text-xl">
			<Details tvShow={tvShow} />
		</div>
	);
}
export const loader = async ({ params, request }) => {
	const userId = await requireUserSession(request);

	return getTvShowById(params.id, userId);
	// const similar = getTvSimilar(params.id, userId);
	// console.log("🚀  similar:", similar);

	// return json({ tvShow, similarTv: similar });
};
export const meta = () => {
	return {
		title: "tv Show Details",
	};
};
