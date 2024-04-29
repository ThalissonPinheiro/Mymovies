export interface Movie {
        backdrop_path: string;
        poster_path: string;
        genres: string[];
        id: number;
        overview: string;
        popularity: number;
        release_date: Date;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
}
