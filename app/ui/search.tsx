'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter  } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
//import styles from './search.module.css';

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
    <div className="flex flex-1 shrink-0 items-center rounded-md border border-gray-200">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <MagnifyingGlassIcon className="ml-3 h-[18px] w-[18px] shrink-0 text-gray-500 peer-focus:text-gray-900" />

      <input
        className="peer block w-full rounded-md border-0 bg-transparent py-2 pl-2 pr-3 text-sm outline-none placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}