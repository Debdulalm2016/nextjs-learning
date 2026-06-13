// This file contains the Card component used in the dashboard page.
import styles from './cards.module.css';

const iconMap = {
  collected: '',
  customers: '',
  pending: '',
  invoices: ''
};

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className={styles.card_box}>
      <div className={styles.card_item}>
        {Icon ? <Icon /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
        <p>
          {value}
        </p>
      </div>
      
    </div>
  );
}