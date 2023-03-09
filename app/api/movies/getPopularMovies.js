export const getPopularMovies = async (page) => {
	return await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US&page=${page}`
	);
};

export const getMovieById = async (id) => {
	return await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=c05c702fa9801ea3d384432c4d491060&language=en-US`
	);
};
