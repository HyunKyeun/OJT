import { CreateMovieDTO } from 'src/dto/create-movie.dto';
import { UpdateMovieDTO } from 'src/dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    readonly movieService: MoviesService;
    constructor(movieService: MoviesService);
    getAll(): Movie[];
    getOne(movieID: number): Movie;
    create(movieData: CreateMovieDTO): void;
    remove(movieID: number): void;
    patch(movieID: number, updateData: UpdateMovieDTO): void;
}
