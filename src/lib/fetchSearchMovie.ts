import { MovieData } from '@/types';

export default async function fetchSearchMovie(
  query: string
): Promise<MovieData[]> {
  const url = `http://localhost:12345/movie/search?q=${query}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}
