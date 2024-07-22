'use server'


enum REVALIDATE_TIME {
    ONE_HOUR = 60 * 60,
    ONE_DAY = 24 * 60 * 60,
    ONE_MONTH = 30 * 24 * 60 * 60,
    ONE_MINUTE = 60
}

import { LoginResponse, GetShelfBooksResponse, MyReadingStateResult, ReadingState } from "@/interfaces/music/books";
import { unstable_cache as cache } from "next/cache";





const getAccessToken = cache(async () => {
    const email = process.env.LITERAL_EMAIL;
    const password = process.env.LITERAL_PASSWORD;


    const body = JSON.stringify({
        query: `
            mutation login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                    token
                    email
                    languages
                    profile {
                        id
                        handle
                        name
                        bio
                        image
                    }
                }
            }
        `,
        variables: {
            email: email,
            password: password
        }
    });

    const data = await fetcher<LoginResponse>(body, true)
    return data.login.token

}, [], { revalidate: REVALIDATE_TIME.ONE_MONTH * 6 })




async function fetcher<T>(body: string, isAccessToken = false): Promise<T> {

    const url = 'https://literal.club/graphql/';

    let headers: Record<string, string> = {
        "Content-Type": "application/json",
    }


    if (!isAccessToken) {
        const apiToken = await getAccessToken()
        headers["Authorization"] = `Bearer ${apiToken}`;
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            body: body,
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.data
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch access token');
    }

}


export const getShelfBooks = cache(async () => {

    const body = JSON.stringify({
        query: `
    query getShelfBySlug($shelfSlug: String!) {
      shelf(where: { slug: $shelfSlug }) {
        books {
          id
          slug
          title
          publishedDate
          cover
          authors {
            id
            name
          }
        }
      }
    }
  `,
        variables: {
            shelfSlug: "bookswannaread-1fzhn39"
        }
    });


    const data = await fetcher<GetShelfBooksResponse>(body)
    return data.shelf.books


}, [], { revalidate: REVALIDATE_TIME.ONE_HOUR })




export const getRecentBook = cache(async () => {

    const body = JSON.stringify({
        query: `
        query myReadingStates {
  myReadingStates {
    id
    status
    book {
      id
      slug
      title
      publishedDate
      publisher
      cover
      authors {
        id
        name
      }
    }
    createdAt
  }
}

        `
    });

    const data = await fetcher<MyReadingStateResult>(body)
    const curStatus = data.myReadingStates.find(({ status }) => status == "IS_READING")
    return curStatus as ReadingState

}, [], { revalidate: REVALIDATE_TIME.ONE_HOUR })

