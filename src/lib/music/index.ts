"use server"
import { RecentlyPlayedResponse, TopTracks, MusicCardTrack } from '@/interfaces/music/music';
import { unstable_cache as cache } from 'next/cache';


export async function getTopTracks() {

    const url = 'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50';
    const token = await getAccessToken()
    const options = {
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

export async function getCurrentTrack(): Promise<MusicCardTrack | null> {

    const url = 'https://api.spotify.com/v1/me/player/currently-playing'
    const token = await getAccessToken()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
        ,
    };


    const data = await fetch(url, options).then(response => {

        if (response.ok) {
            return response
        }

        throw new Error('Error while fetching data ')

    }).then(data => data.json())
        .catch((err) => {
            return null
        })



    if (!data) {
        return null
    }


    return {
        href: data.item.external_urls.spotify,
        title: data.item.name,
        artist: data.item.artists[0].name,
        image_url: data.item.album.images[0].url,
        listenOn: null
    }


}



export const getRecentTrack = async (): Promise<MusicCardTrack | null> => {

    const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'
    const token = await getAccessToken()

    const options = {
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
        .catch(err => {
            return null
        })


    if (data == null || !('items' in data) || data.items.length == 0) {
        return null
    }


    return {
        image_url: data.items[0].track.album.images[0].url,
        artist: data.items[0].track.artists[0].name,
        title: data.items[0].track.name,
        href: data.items[0].track.external_urls.spotify,
        listenOn: data.items[0].played_at
    }

}




// revalidate after hour
export const getAccessToken = cache(async () => {

    const client_id = process.env.SPOTIFY_KEY;
    const client_secret = process.env.SPOTIFY_SECRET;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;



    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refresh_token as string, }).toString()
    });

    const data = await response.json();
    return data.access_token
}
    ,
    [],
    { revalidate: 3600 }
)
