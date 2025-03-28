import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import style from './search-layout.module.css';

export default function SearchLayout({ children }: { children: ReactNode }) {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const q = router.query.q as string;

  useEffect(() => {
    setKeyword(q || '');
  }, [q]);

  const onSubmit = () => {
    router.push(`/search?q=${keyword}`);
  };
  const onChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };
  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요.."
          onChange={onChangeKeyword}
          value={keyword}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
