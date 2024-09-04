'use server'
interface ChessStats {
    stats: {
        key: string;
        stats: {
            rating: number;
            highest_rating: number;
            highest_rating_date: string | number;
            rating_time_change_days: number;
            rating_time_change_value: number;
            total_game_count: number;
            total_win_count: number;
            total_loss_count: number;
            total_draw_count: number;
            avg_opponent_rating: number;
            highest_opponent_rating: number;
            highest_rating_info?: {
                timestamp: number;
                rating: number;
            };
            lowest_rating_info?: {
                timestamp: number;
                rating: number;
            };
            total_seconds?: number;
            lowest_rating?: number;
            lowest_rating_date?: number;
            attempt_count?: number;
            passed_count?: number;
            failed_count?: number;
            last_date?: string;
            highest_score?: number;
            highest_type_code?: string;
            avg_score?: number;
            puzzle_attempts_total?: number;
            modes?: {
                [key: string]: number;
            };
        };
        gameCount: number;
        lastPlayed: boolean;
        lastDate?: string;
    }[];
    lastType: string;
    versus: {
        total: number;
    };
    ratingOnlyStats: string[];
    officialRating: null;
    lessonLevel: {
        icon: string;
        name: string;
        progress: number;
    };
}


interface ChessGame {
    id: number;
    fen: string;
    daysPerTurn: number;
    moves: number;
    user1Rating: number;
    user2Rating: number;
    user1Result: number;
    user2Result: number;
    isTournament: boolean;
    isTeamMatch: boolean;
    highlightSquares: string;
    gameEndTime: string;
    isTimeout: boolean;
    isLive: boolean;
    isVsComputer: boolean;
    gameType: {
        name: string;
        code: string;
        isChess960: boolean;
        isKingOfTheHill: boolean;
        isThreeCheck: boolean;
        isBughouse: boolean;
        isCrazyHouse: boolean;
    };
    gameTimeClass: string;
    baseTime1: number;
    timeIncrement: number;
    user1: {
        id: number;
        title: string | null;
        username: string;
        countryId: number;
        countryName: string;
        membershipLevel: number;
        flairCode: string;
    };
    user2: {
        id: number;
        title: string | null;
        username: string;
        countryId: number;
        countryName: string;
        membershipLevel: number;
        flairCode: string;
    };
    isArena: boolean;
    user1Accuracy: number | null;
    user2Accuracy: number | null;
}


interface RapidStats {
    timestamp: number,
    rating: number
}


interface UserProfile {
    avatarUrl: string;
    bestRating: number;
    bestRatingType: string;
    chessTitle: string | null;
    isEnabled: boolean;
    isStaff: boolean;
    isGuest: boolean;
    countryId: number;
    membership: {
        level: number;
        name: string;
        code: string;
        vacation_add_days: number;
        vacation_cap_days: number;
        vacation_accrue_days: number;
    };
    joinDate: string;
    lastLoginDate: string;
    firstName: string;
    lastName: string;
    userId: number;
    isFideVerified: boolean;
    isCoach: boolean;
    isModerator: boolean;
    countryName: string;
    isMessageable: boolean;
    isFriendRequestFromUserExists: boolean;
    canReceiveGiftMembership: boolean;
    uuid: string;
    notMessageableReasonCode: string;
    areFriends: boolean;
    isTracked: boolean;
    isBlocked: boolean;
    isFriendRequestExists: boolean;
    blocksCurrentUser: boolean;
    onlineStatus: string;
    flair: {
        id: number;
        code: string;
        name: string;
        description: string;
        status: string;
    };
    topPuzzleRushScore: number;
    topPuzzleRushScoreType: string;
    isStreamer: boolean;
    isTopBlogger: boolean;
    allowFriendRequests: boolean;
}

interface FormatedChessGame {
    href: string;
    result: string;
    moves: number;
    formattedTime: string;
    me: {
        id: number;
        title: string | null;
        username: string;
        countryId: number;
        countryName: string;
        membershipLevel: number;
        flairCode: string;
        avatarUrl: string;
        rating: number;
    };
    opponent: {
        id: number;
        title: string | null;
        username: string;
        countryId: number;
        countryName: string;
        membershipLevel: number;
        flairCode: string;
        avatarUrl: string;
        rating: number;
    };

}









import { unstable_cache as cache } from 'next/cache'


const USER_ID = '349027177'
const USER_NAME = 'x_index'
const profileUrl = "https://www.chess.com/member/x_index"

async function rapidRatingAnalytics() {

    const url = 'https://www.chess.com/callback/live/stats/x_index/chart?daysAgo=90&type=rapid'

    const response = await fetch(url)

    if (!response.ok) {
        return {
            success: false,
            data: []
        }

    }

    const data = await response.json() as RapidStats[]

    return {
        success: true,
        data: data
    }
}

export const cachedRapidRating = cache(rapidRatingAnalytics, ['rapid-rating'], {
    revalidate: 60 * 60 * 24   // 24 hours
})



export async function about(userName = 'x_index') {

    const url = `https://www.chess.com/callback/user/popup/${userName}`

    const response = await fetch(url)

    if (!response.ok) {
        return {
            success: false,
            data: {
                avatarUrl: "https://images.chesscomfiles.com/uploads/v1/user/349027177.eed16224.50x50o.771f1abb4f1f.jpg",
                onlineStatus: "offline",
                firstName: "Inderjot",
                lastName: "Singh"
            }
        }

    }

    const data = await response.json() as UserProfile

    return {
        success: true,
        data
    }

}



async function recentMatches() {

    const url = 'https://www.chess.com/callback/user/games?locale=en_US&all=1&userId=349027177'

    const response = await fetch(url)

    if (!response.ok) {
        return {
            status: false,
            data: [] as FormatedChessGame[]
        }

    }

    const data = await response.json() as ChessGame[]

    return {
        status: true,
        data: await Promise.all(data.map(formatChessGame))
    }

}


export const cachedRecentMatches = cache(recentMatches, ['recent-matches'], {
    revalidate: 60 * 60 * 5   // 5 hours
})


export const getLastMatch = async () => {
    const { data } = await cachedRecentMatches()
    return data[0]
}






export async function getAllAnalytics() {

    const url = 'https://www.chess.com/callback/member/stats/x_index'

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Error while fetching data ')
    }

    const data = await response.json() as ChessStats

    return {
        success: true,
        data: data
    }
}



async function formatChessGame(game: ChessGame): Promise<FormatedChessGame> {

    const href = `https://www.chess.com/game/live/${game.id}`
    const myUserKey = game.user1.username === USER_NAME ? 'user1' : 'user2'
    const opponentKey = game.user1.username === USER_NAME ? 'user2' : 'user1'
    const myRating = game[`${myUserKey}Rating`]
    const opponentRating = game[`${opponentKey}Rating`]
    const result = game[`${myUserKey}Result`] === 0 ? "Lose" : game[`${myUserKey}Result`] === 0.5 ? "Draw" : "Win"

    const [myAbout, opponentAbout] = await Promise.all([
        about(game[`${myUserKey}`].username),
        about(game[`${opponentKey}`].username)
    ])

    return {
        href,
        result,
        moves: game.moves,
        formattedTime: game.gameEndTime,
        // @ts-ignore
        me: {
            ...game[`${myUserKey}`],
            rating: myRating,
            avatarUrl: myAbout.data.avatarUrl
        }
        ,
        // @ts-ignore
        opponent: {
            ...game[`${opponentKey}`],
            rating: opponentRating,
            avatarUrl: opponentAbout.data.avatarUrl
        }

    }


}