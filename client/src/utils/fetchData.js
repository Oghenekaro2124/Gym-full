export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "561e46fc48msh704d740d4571e2bp1c2aa8jsn7e99d7454ff8",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "561e46fc48msh704d740d4571e2bp1c2aa8jsn7e99d7454ff8",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    return { error: error.message };
  }
};
