import SideNav from '@/app/ui/dashboard/sidenav';
import styles from "@/app/dashboard/Dashboard.module.css";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboardcontainer}>
      <div className={styles.dashboardsub}>
        <SideNav />
      </div>
      <div className={styles.dashboardmain}>
        {children}
      </div>
    </div>
  );
}