import { Octokit } from 'octokit'


const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN!
})

interface githubStatsResponse {
    followers: number,
    following: number,
    image_url: string,
    url: string,
    repos: number,
}


export async function githubStats(): Promise<githubStatsResponse> {

    const response = await octokit.request('GET /user', {
        'X-GitHub-Api-Version': '2022-11-28'

    })


    return {
        followers: response.data.followers,
        following: response.data.following,
        image_url: response.data.avatar_url,
        url: response.data.url,
        repos: response.data.public_repos
    }



}