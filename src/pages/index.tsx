import SearchLayout from '@/components/search-layout';
import { ReactNode } from 'react';

export default function Home() {
  return <h2>ONEBITE CINEMA</h2>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
