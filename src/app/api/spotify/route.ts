import { redirect } from "next/navigation";
import qs from 'query-string'
import { NextRequest } from "next/server";



export async function GET(req: NextRequest) {


    const redirect_uri = 'http://localhost:3000/music'
    const CLIENT_ID = process.env.SPOTIFY_KEY!
    const scope = 'user-read-recently-played user-library-read user-read-currently-playing user-read-playback-state user-top-read user-library-read'


    const BASE_URL = 'https://accounts.spotify.com/authorize'
    const PARAMS = qs.stringify(
        {
            response_type: 'code',
            client_id: CLIENT_ID,
            scope: scope,
            redirect_uri: redirect_uri,
        }
    )

    redirect(`${BASE_URL}?${PARAMS}`)
}