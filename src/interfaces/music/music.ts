interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: any;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}


interface Cursor {
    after: string;
    before: string;
}

interface RecentPlay {
    track: Track;
    played_at: string;
    context: Context[];
}

export interface RecentlyPlayedResponse {
    items: RecentPlay[];
    next: string;
    cursors: Cursor;
    limit: number;
    href: string;
}



interface ExternalUrls {
    spotify: string;
}



interface Item {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: { isrc: string };
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}


export interface MyData {
    timestamp: number;
    context: Context;
    progress_ms: number;
    item: Item;
    currently_playing_type: string;
    actions: Actions;
    is_playing: boolean;
}

interface ExternalUrls {
    spotify: string;
}

interface Artist {
    name: string
}

interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: {
        url: string,
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}


interface Context {
    external_urls: ExternalUrls;
    href: string;
    type: string;
    uri: string;
}

interface Actions {
    disallows: { resuming: boolean };
}



export interface TopTracks {
    items: Item[]
}



export type MusicCardTrack = {
    href: string,
    title: string,
    artist: string,
    image_url: string,
    listenOn: string | null
}