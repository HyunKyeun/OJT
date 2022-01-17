import { CreateMovieDTO } from 'src/dto/create-movie.dto';
import { UpdateMovieDTO } from 'src/dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteOne(id: number): void;
    create(movieData: CreateMovieDTO): void;
    update(id: number, updateData: UpdateMovieDTO): void;
}
