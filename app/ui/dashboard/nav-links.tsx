//nav-links.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
  <>
     <Link href="/">Home</Link><br /><br />
     <Link href="/dashboard">Dashboard Overview</Link><br /><br />
     <Link href="/dashboard/invoices">Invoices</Link><br /><br />
     <Link href="/dashboard/customer">Customers</Link><br /><br />
     {pathname === '/dashboard' && <p>You are on the Dashboard Overview page</p>}
     {pathname === '/dashboard/invoices' && <p>You are on the Invoices page</p>}
     {pathname === '/dashboard/customer' && <p>You are on the Customers page</p>}
     
  </>
  );
}