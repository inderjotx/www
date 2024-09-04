import { useState, useEffect } from 'react';

export function useMediaQuery({ maxWidth }: { maxWidth: number }) {
    const mediaQuery = `(max-width: ${maxWidth}px)`;
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery);
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Set the initial value
        setMatches(mediaQueryList.matches);

        // Add listener
        mediaQueryList.addEventListener('change', listener);

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, [mediaQuery]);

    return matches;
}

