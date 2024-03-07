import { MyData, RecentlyPlayedResponse, TopTracks } from '@/interfaces/music/music';
import { revalidatePath } from 'next/cache';
import qs from 'query-string'


export async function getTopTracks() {

    const url = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50';
    const token = await getAccessToken()
    const options = {
        next: { revalidate: 4 * 3600 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        ,
    };



    const data: TopTracks = await fetch(url, options)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))




    return data.items.map((track) => ({
        href: track.external_urls.spotify,
        title: track.name,
        artist: track.artists[0].name,
        image_url: track.album.images[0].url,
        listenOn: null
    }))

}



// or recent track
export async function getCurrentTrack() {

    const url = 'https://api.spotify.com/v1/me/player/currently-playing'
    const token = await getAccessToken()

    const options = {
        next: { revalidate: 0 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        ,
    };

    const data: MyData = await fetch(url, options)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))




    if (data == null) return null

    return {
        href: data.item.external_urls.spotify,
        title: data.item.name,
        artist: data.item.artists[0].name,
        image_url: data.item.album.images[0].url,
        listenOn: null
    }


}




export const getRecentTrack = async () => {

    const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'
    const token = await getAccessToken()

    const options = {
        next: { revalidate: 0 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        ,
    };

    const data: RecentlyPlayedResponse = await fetch(url, options)
        .then(data => data.json())
        .then(json => json)
        .catch(err => console.log(err))


    try {
        return {
            image_url: data.items[0].track.album.images[0].url,
            artist: data.items[0].track.artists[0].name,
            title: data.items[0].track.name,
            href: data.items[0].track.external_urls.spotify,
            listenOn: data.items[0].played_at
        }
    }


    catch (err) {
        console.log(err)
        revalidatePath('/music')
    }



}






export const getAccessToken = async () => {

    const client_id = process.env.SPOTIFY_KEY;
    const client_secret = process.env.SPOTIFY_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;



    const response = await fetch(TOKEN_ENDPOINT, {
        next: { revalidate: 0 },
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: qs.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    const data = await response.json();
    return data.access_token
};
