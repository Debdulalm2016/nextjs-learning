// This is the main page for the dashboard. It will display an overview of the data, and links to other pages in the dashboard.
import { Card } from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
//import styles from "@/app/dashboard/Dashboard.module.css";
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Suspense } from 'react';
import {RevenueChartSkeleton} from '@/app/ui/skeletons';

export const dynamic = 'force-dynamic'; //Added for testing purposes. This will force the page to be re-rendered on every request, instead of being cached. This is useful for testing, but should be removed in production.

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  //console.log('Latest Invoices:', latestInvoices);
  //const revenue = await fetchRevenue();
  const {numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices} 
       = await fetchCardData();
  return (
    <div className="pt-6">
      <h1 className="mb-8 text-2xl md:text-4xl text-center text-blue-500" >Dashboard Page for NextJS Learning</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
        <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart /> 
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} /> 
      </div>
    </div>
  );
}