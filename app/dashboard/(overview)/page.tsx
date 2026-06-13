// This is the main page for the dashboard. It will display an overview of the data, and links to other pages in the dashboard.
import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import styles from "@/app/dashboard/Dashboard.module.css";
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { text } from 'stream/consumers';
import { Suspense } from 'react';
import {RevenueChartSkeletonx} from '@/app/ui/skeletons';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  //const revenue = await fetchRevenue();
  const {numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices} 
       = await fetchCardData();
  return (
    <main>
      <h1 style={{color: '#4b25a3', textAlign: 'center'}}>Dashboard Page for Learning</h1>
      <div className={styles.cards_container}>
         <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
         <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> 
      </div>
      <div className={styles.dashboard_charts}>
        <Suspense fallback={<RevenueChartSkeletonx />}>
          <RevenueChart /> 
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} /> 
      </div>
    </main>
  );
}