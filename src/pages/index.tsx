import SearchLayout from '@/components/search-layout';
import { ReactNode } from 'react';
import movies from '@/mock/movies.json';
import style from './index.module.css';
import MovieItem from '@/components/movie-item';

export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommandMovie}>
          {movies.slice(5, 8).map((movie) => (
            <MovieItem key={movie.id} {...movie} recommand />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allMovie}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
