// This component is representational only.
import { generateYAxis } from '@/app/lib/utils';
import { Revenue } from '@/app/lib/definitions';
import styles from './revenue-chart.module.css';
import { fetchRevenue } from '@/app/lib/data';

export default async function RevenueChart() {
  const revenue: Revenue[] = await fetchRevenue();
  const chartHeight = 350;
  // NOTE: Uncomment this code in Chapter 7

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className={styles.revenue_container}>
      <h2 >
        Recent Revenue
      </h2>
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className={styles.revenue_sub}>
        <div className={styles.revenue_item}>
          <div
            className={styles.revenue_itemY}
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className={styles.revenue_bar}>
              <div className={styles.revenue_barV}
                
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className={styles.xlabel}>
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div> 
    </div>
  );
}