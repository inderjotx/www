import { useEffect, useState } from "react";

// this is to prevent hydration errors during prerendering 
export function useClient() {

    const [isClient, setIsClient] = useState(false)

    // use effect is only called in the client when componse is mounted
    useEffect(() => {

        setIsClient(true)
    }, [])

    return [isClient]
}