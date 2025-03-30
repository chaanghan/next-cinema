import { MovieData } from '@/types';
import Link from 'next/link';
import style from './movie-item.module.css';

export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
  recommand,
}: MovieData & {
  recommand?: boolean;
}) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img
        src={posterImgUrl}
        className={`${style.container} ${recommand ? style.recommand : ''}`}
      />
    </Link>
  );
}
