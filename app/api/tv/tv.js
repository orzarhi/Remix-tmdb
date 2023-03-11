export const getPopularTvShows = async (page, userId) => {
	if (!userId) {
		throw new Error("Faild to get tv shows.");
	}

	return await fetch(
		`https://api.themoviedb.org/3/tv/popular?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US&page=${page}`
	);
};

export const getTvShowById = async (id, userId) => {
	if (!userId) {
		throw new Error("Faild to get tv show.");
	}

	return await fetch(
		`https://api.themoviedb.org/3/tv/${id}?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US`
	);
};

export const getTvSimilar = async (id, userId) => {
	if (!userId) {
		throw new Error("Faild to get tv show.");
	}

	return await fetch(
		`https://api.themoviedb.org/3/tv/${id}/similar?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US&page=1`
	);
};
