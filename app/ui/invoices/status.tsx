//import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
//import clsx from 'clsx';
import styles from '@/app/ui/ui-general.module.css';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
        className={styles.status_item}
    >
      {status === 'pending' ? (
        <span style ={{ color: 'orange' }}>
          Pending
          
        </span>
      ) : null}
      {status === 'paid' ? (
        <span style ={{ color: 'green' }}>
          Paid
          
        </span>
      ) : null}
    </span>
  );
}