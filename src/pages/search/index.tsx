import SearchLayout from '@/components/search-layout';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import movies from '@/mock/movies.json';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

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
