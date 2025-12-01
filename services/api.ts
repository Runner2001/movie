export const TMDB_CONFIG={
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
    }
}
const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWQ3NGM2OWZkYWNjZjgxYWFlOWQ3YTVlNzE1ODZmYSIsIm5iZiI6MTYzOTY0NjE0Ni40NTIsInN1YiI6IjYxYmIwM2MyMTNhZjVmMDA5MmZhNTNjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vrH0IAQDu-prZ8fbD8TCOrZMwH8gsknbjU2C6MxHICM'
    }
};

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query !== "" ?
        `${TMDB_CONFIG.BASE_URL}/search/movie?query=${query}'`
        : `${TMDB_CONFIG.BASE_URL}/trending/movie/day?language=en-US`;

    const response = await fetch(endpoint, options);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();
    return data.results;
}

