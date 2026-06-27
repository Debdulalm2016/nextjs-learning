// This file contains the LatestInvoices component used in the dashboard page.

import Image from 'next/image';

import { LatestInvoice } from '@/app/lib/definitions';
import styles from './latest-invoices.module.css';

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <>
      
      <div className={styles.invoices_container}>
        {/* NOTE: Uncomment this code in Chapter 7 */}
        <h2 className={`mb-4 text-xl md:text-2xl`}>
           Latest Invoices
        </h2>
        { <div className="bg-white px-6">
          {latestInvoices.map((invoice) => {
            return (
              <div
                key={invoice.id} 
                className={styles.invoice_row}
              >
                <div className={styles.invoice_item}>
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  </div>
                  <div className={styles.invoice_item}>
                    <p className="truncate text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                  </div>
                  <div className={styles.invoice_item}>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                
                <div className={styles.invoice_item}>
                    <p>
                      {invoice.amount}
                    </p>
                </div>
              </div>
            );
          })}
        </div> }
        <div className="flex items-center pb-2 pt-6">
          
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </>
  );
}