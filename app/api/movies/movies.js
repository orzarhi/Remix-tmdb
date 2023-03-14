import { config } from "../config";

export const getPopularMovies = async (page, userId) => {
	if (!userId) {
		throw new Error("Faild to get movies.");
	}

	return await fetch(
		`${config.baseUrl}/movie/popular?api_key=${config.KEY_SECRET}&language=en-US&page=${page}`
	);
};

export const getMovieById = async (id, userId) => {
	if (!userId) {
		throw new Error("Faild to get movie.");
	}

	return await fetch(
		`${config.baseUrl}/movie/${id}?api_key=${config.KEY_SECRET}&language=en-US`
	);
};

export const searchMovie = async ({ name }) => {
	return await fetch(
		`${config.baseUrl}/search/movie?api_key=${config.KEY_SECRET}&language=en-US&query=${name}&page=1&include_adult=false`
	);
};
