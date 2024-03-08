
export interface Author {
    id: string;
    name: string;
}

export interface Book {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    isbn10: string;
    isbn13: string;
    language: string;
    pageCount: number;
    publishedDate: string;
    publisher: string;
    cover: string;
    authors: Author[];
    gradientColors: string[];
}

export interface ReadingState {
    id: string;
    status: string;
    book: Book;
    createdAt: string;
}

export interface MyReadingStateResult {
    myReadingStates: ReadingState[]
}


export interface LoginResponse {
    login: {
        token: string;
        email: string;
        languages: string[];
        profile: {
            id: string;
            handle: string;
            name: string;
            bio: string;
            image: string;
        };
    };
}


export interface GetShelfBooksResponse {
    shelf: {
        books: Book[]
    }
}