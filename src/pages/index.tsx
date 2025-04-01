import SearchLayout from '@/components/search-layout';
import { ReactNode } from 'react';
import movies from '@/mock/movies.json';
import style from './index.module.css';
import MovieItem from '@/components/movie-item';
import fetchMovies from '@/lib/fetchMovies';
import { InferGetServerSidePropsType } from 'next';
import fetchRandomMovies from '@/lib/fetchRandomMovies';

export const getServerSideProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: { allMovies, recoMovies },
  };
};
export default function Home({
  allMovies,
  recoMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommandMovie}>
          {recoMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} recommand />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.allMovie}>
          {allMovies.map((movie) => (
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
