import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovielistApi } from "../store/movieReducer/movie.acitons";
import { Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
const MovieListPage = () => {
  const { movies, isLoading, isError } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovielistApi());
    }
  }, [movies.length]);

  return (
    <div>
      {isError ? (
        <Heading textAlign={"center"}>Something went wrong!</Heading>
      ) : (
        <SimpleGrid columns={"4"} spacing={"10px"} p='50px'>
          {isLoading
            ? Array(10)
                .fill(1)
                .map((a, i) => {
                  return <Skeleton key={i}  w="300px"
                  h="420px"
                  borderRadius={'20px'}
                  boxShadow={'lg'}
                  m='10px'></Skeleton>;
                })
            : movies.map((movie, i) => {
                return <MovieCard key={movie._id} {...movie} />;
              })}
        </SimpleGrid>
      )}
    </div>
  );
};

export default MovieListPage;
