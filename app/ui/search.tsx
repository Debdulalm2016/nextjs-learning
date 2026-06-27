'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import styles from './search.module.css';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    console.log(term);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    };
    
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  
  return (
    <div className={styles.search_group}>
      <label htmlFor="search" style={{ marginRight: '10px' }}>
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      /> 
      
      <MagnifyingGlassIcon  className={styles.icon_small} />
       
    </div>
  );
}