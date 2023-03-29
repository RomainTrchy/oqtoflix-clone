const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'bd97853b65657cd65de5833b4f0f6b30',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;