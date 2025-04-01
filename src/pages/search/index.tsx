import SearchLayout from '@/components/search-layout';
import { ReactNode } from 'react';
import MovieItem from '@/components/movie-item';
import style from './index.module.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import fetchSearchMovie from '@/lib/fetchSearchMovie';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const query = context.query.q;
  const movies = await fetchSearchMovie(query as string);

  return {
    props: { movies },
  };
};

export default function Search({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
