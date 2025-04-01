import { MovieData } from '@/types';

export default async function fetchMovie(
  movieId: number
): Promise<MovieData | null> {
  const url = `http://localhost:12345/movie/${movieId}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
