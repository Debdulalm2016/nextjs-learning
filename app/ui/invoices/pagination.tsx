'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
//import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

//import Image from "next/image";
import styles from './pagination.module.css';

export default function Pagination({ totalPages }: { totalPages: number }) {
  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  // NOTE: Uncomment this code in Chapter 10

  const allPages = generatePagination(currentPage, totalPages);
  

  return (
    <>
      {/*  NOTE: Uncomment this code in Chapter 10 */}

      <div className={styles.pageination_group}>
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className={styles.pagenumber_group}>
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={`${page}-${index}`}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div> 
    </>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
    
  return isActive || position === 'middle' ? (
    <div className={styles.page_number_1}>{page}</div>
  ) : (
    <Link href={href} className={styles.page_number_2}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
     const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className={styles.arrow_icon} />
    ) : (
      <ArrowRightIcon className={styles.arrow_icon} />
    );

     return isDisabled ? (
    <div className={styles.page_arrow_1}>
      {icon}
    
    </div>
  ) : (
    <Link className={styles.page_arrow_2} href={href}>
      {icon}
    </Link>
  );
}