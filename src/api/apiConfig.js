const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2e9dd4729787d7b5f6e8f9a386ca60d5',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;
