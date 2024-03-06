import React from 'react'

export default async function Page() {

    const data = await getFavouriteShows()

    return (
        <div>page</div>
    )
}
