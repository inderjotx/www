

export async function getFavouriteSongs() {

    const API_KEY = process.env.SPOTIFY_SECRET!
    const url = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term';
    const options = {
        // next: { revalidate: 4 * 3600 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        }
        ,
    };



    const data = await fetch(url, options)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))


    console.log(data)
}