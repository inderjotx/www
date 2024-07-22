


const API_KEY: string = process.env.WAKATIME_API!;
const USERNAME: string = 'inderjotx';

export async function weeklyCodeTime() {


    const startOfWeek: Date = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    // const formattedDate: string = `${startOfWeek.getFullYear()}-${(startOfWeek.getMonth() + 1).toString().padStart(2, '0')}-${startOfWeek.getDate().toString().padStart(2, '0')}`;

    const apiUrl: string = `https://wakatime.com/api/v1/users/${USERNAME}/all_time_since_today`;

    const response = fetch(apiUrl, {
        headers: {
            Authorization: `Basic ${btoa(API_KEY)}`,
        },
    })
        .then((response: Response) => response.json())
        .then((data: any) => {

            const startDate = data.data.range.start_date
            const time = data.data.digital
            return {
                startDate,
                time,
                success: true
            }

        })
        .catch((error: Error) => {
            console.error('Error fetching data:', error);
            return {
                success: false,
                time: "850:"
            }
        });


    return response

}