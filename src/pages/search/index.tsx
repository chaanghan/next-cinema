import SearchLayout from '@/components/search-layout';
import { ReactNode, useEffect, useState } from 'react';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';
import fetchSearchMovie from '@/lib/fetchSearchMovie';
import { MovieData } from '@/types';
import { useRouter } from 'next/router';

export default function Search() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const query = router.query.q;

  const fetchSearch = async () => {
    const searchedData = await fetchSearchMovie(query as string);
    setMovies(searchedData);
  };

  useEffect(() => {
    if (query) {
      fetchSearch();
    }
  }, [query]);

  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} recommand />
      ))}
    </div>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
