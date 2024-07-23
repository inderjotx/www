'use server'
import './chess.types'


const USER_ID = '349027177'
const USER_NAME = 'x_index'
const profileUrl = "https://www.chess.com/member/x_index"

export async function rapidRatingAnalytics() {

    const url = 'https://www.chess.com/callback/live/stats/x_index/chart?daysAgo=90&type=rapid'

    const response = await fetch(url)

    if (!response.ok) {
        console.log('error')
        return {
            success: false,
            data: []
        }

    }

    const data = await response.json() as RapidStats[]

    return data
}



export async function about() {

    const url = 'https://www.chess.com/callback/user/popup/x_index'

    const response = await fetch(url)

    if (!response.ok) {
        console.log('error')
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

    return data

}



export async function recentMatches() {

    const url = 'https://www.chess.com/callback/user/games?locale=en_US&all=1&userId=349027177'

    const response = await fetch(url)

    if (!response.ok) {
        console.log('error')
        return {
            success: false,
            data: []
        }

    }

    const data = await response.json() as ChessGame[]

    return data.map(formatChessGame)

}





export async function getAllAnalytics() {

    const url = 'https://www.chess.com/callback/member/stats/x_index'

    const response = await fetch(url)

    if (!response.ok) {
        console.log('error')
        return {
            success: false,
            data: []
        }

    }

    const data = await response.json() as ChessStats

    return data
}



function formatChessGame(game: ChessGame) {

    const href = `https://www.chess.com/game/live/${game.id}`
    const myUserKey = game.user1.username === USER_NAME ? 'user1' : 'user2'
    const opponentKey = game.user1.username === USER_NAME ? 'user2' : 'user1'
    const myRating = game[`${myUserKey}Rating`]
    const opponentRating = game[`${opponentKey}Rating`]
    const result = game[`${myUserKey}Result`] === 0 ? "Loss" : "Win"

    return {
        href,
        result,
        moves: game.moves,
        formattedTime: game.gameEndTime,
        me: {
            ...game[`${myUserKey}`],
            rating: myRating
        }
        ,
        opponent: {
            ...game[`${opponentKey}`],
            rating: opponentRating
        }

    }


}