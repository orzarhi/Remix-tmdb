import { config } from "../config";

export const getPopularTvShows = async (page, userId) => {
	if (!userId) {
		throw new Error("Faild to get tv shows.");
	}

	return await fetch(
		`${config.baseUrl}/tv/popular?api_key=${config.KEY_SECRET}&language=en-US&page=${page}`
	);
};

export const getTvShowById = async (id, userId) => {
	if (!userId) {
		throw new Error("Faild to get tv show.");
	}

	return await fetch(
		`${config.baseUrl}/tv/${id}?api_key=${config.KEY_SECRET}&language=en-US`
	);
};

export const getTvSimilar = async (id, userId) => {
	if (!userId) {
		throw new Error("Faild to get tv show.");
	}

	return await fetch(
		`${config.baseUrl}/tv/${id}/similar?api_key=${config.KEY_SECRET}&language=en-US&page=1`
	);
};

export const searchTvShow = async ({ name }) => {
	return await fetch(
		`${config.baseUrl}/search/tv?api_key=${config.KEY_SECRET}&language=en-US&query=${name}&page=1&include_adult=false`
	);
};
