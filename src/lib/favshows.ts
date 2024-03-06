
interface ListItem {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string | null;
    media_type: 'movie' | 'tv';
    runtime: number | null;
    genre_ids: number[];
    popularity: number;
    first_air_date: string | null; // Assuming it's a string in ISO format (YYYY-MM-DD)
    vote_average: number;
    vote_count: number;
    origin_country: string[];

}



interface List {
    created_by: string;
    description: string;
    favorite_count: number;
    id: number;
    iso_639_1: string;
    item_count: number;
    items: ListItem[];
}




export async function getFavouriteShow() {

    const FAVLIST_ID = process.env.TMDB_LIST_ID!
    const API_KEY = process.env.TMDB_READ_API!;

    const url = `https://api.themoviedb.org/3/list/${FAVLIST_ID}?language=en-US&page=1`;
    const options = {
        next: { revalidate: 4 * 3600 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
        }
        ,
    };

    const data: List = await fetch(url, options,)
        .then(res => res.json())
        .then(json => json)
        .catch(err => console.error('error:' + err));




    return data.items.map((show) => ({
        image_url: getImageURL(show.backdrop_path),
        slug: show.name,
        href: `https://www.themoviedb.org/tv/${show.id}`
    }))

}


function getImageURL(path: string | null) {

    if (!path) return ""

    const BASE_URL = 'https://image.tmdb.org/t/p/';
    const POSTER_SIZE = 'w780';
    const imageUrl = `${BASE_URL}${POSTER_SIZE}${path}`;
    return imageUrl
}