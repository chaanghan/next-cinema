import style from './[id].module.css';
import fetchMovie from '@/lib/fetchMovie';
import fetchMovies from '@/lib/fetchMovies';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

export const getStaticPaths = async () => {
  const movies = await fetchMovies();

  return {
    paths: movies.map((movie) => ({ params: { id: String(movie.id) } })),
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const movieId = Number(context.params!.id);
  const movie = await fetchMovie(movieId);

  return {
    props: { movie },
  };
};
export default function Movie({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!movie) return '데이터를 찾을 수 없습니다.';
  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
        className={style.cover_img_container}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.info}>
        {releaseDate} / {genres.join(', ')} / {runtime}분
      </div>
      <div className={style.company}>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
