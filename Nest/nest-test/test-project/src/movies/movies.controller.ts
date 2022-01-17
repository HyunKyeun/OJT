import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDTO } from 'src/dto/create-movie.dto';
import { UpdateMovieDTO } from 'src/dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(readonly movieService : MoviesService) {}

    @Get()
    getAll() :Movie[] {
        return this.movieService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieID: number) : Movie {
        console.log(typeof movieID);
        return this.movieService.getOne(movieID) ;
    }

    @Post()
    create(@Body() movieData : CreateMovieDTO) {

        return this.movieService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieID : number){
        return this.movieService.deleteOne(movieID);
    }

    @Patch(':id')
    patch(@Param('id') movieID : number, @Body() updateData : UpdateMovieDTO){
        return this.movieService.update(movieID, updateData);
    }
   
}
