import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    readonly movieService: MoviesService;
    constructor(movieService: MoviesService);
    getAll(): Movie[];
    getOne(movieID: string): Movie;
    create(movieData: any): void;
    remove(movieID: string): void;
    patch(movieID: string, updateData: any): void;
}
