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