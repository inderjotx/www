import React from 'react'
import countryFlagIcon from 'country-flag-icons/react/3x2';


export function Flag({ code }: { code: string }) {


    // @ts-ignore
    const FlagIcon = countryFlagIcon[code]

    return (
        <FlagIcon />
    )
}
