export const getPopularMovies = async (page, userId) => {
	if (!userId) {
		throw new Error("Faild to get movies.");
	}

	return await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US&page=${page}`
	);
};

export const getMovieById = async (id, userId) => {
	if (!userId) {
		throw new Error("Faild to get movie.");
	}

	return await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US`
	);
};
