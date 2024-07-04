export const getGifs = async ( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Zvu41T7uAOm8uAh1UJ6fSiKiY1Tb1I3P&limit=10&q=${category}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url    
    }))

    // console.log (gifs.url);

    return gifs;
};