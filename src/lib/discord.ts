"use server"
interface DiscordStatusResponse {
    data: {
        kv: { [key: string]: string };
        spotify: null;
        discord_user: any;
        activities: any[];
        discord_status: string;
        active_on_discord_web: boolean;
        active_on_discord_desktop: boolean;
        active_on_discord_mobile: boolean;
        listening_to_spotify: boolean;
    };
    success: boolean;
}

export async function getDiscordStatus() {

    const url = 'https://api.lanyard.rest/v1/users/1061624989473845308'

    const response: DiscordStatusResponse = await fetch(url).then(data => data.json()).catch(err => console.log(err))

    try {

        return response.data.discord_status ?? "offline"
    }

    catch (err) {
        console.log(err)
        return "offline"
    }


}