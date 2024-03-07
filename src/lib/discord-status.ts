
export function getDiscordStatus() {
    const USER_ID = '1061624989473845308'
    const token = process.env.DISCORD_ACCESS_TOKEN!
    const BASE_URL = `https://discord.com/api/v9/users/${USER_ID}`


    fetch(BASE_URL, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(`Your status is: ${data.status}`);
        })
        .catch(err => console.error(err));

}