// This layout is used for all pages under /dashboard, including the overview page and any other subpages.
import SideNav from '@/app/ui/dashboard/sidenav';
//import styles from "@/app/dashboard/Dashboard.module.css";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="w-full flex-none md:w-64 bg-green-100 p-4 md:p-8 ">
        <SideNav />
      </div>
      <div className="grow p-6 md:p-12 bg-pink-100">
        {children}
      </div>
    </div>
  );
}